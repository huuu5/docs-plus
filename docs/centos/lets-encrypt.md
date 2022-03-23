# Let's Encrypt免费泛域名证书

## 介绍

Let’s Encrypt 是一家免费、开放、自动化的证书颁发机构（CA），为公众的利益而运行。 它是一项由 [Internet Security Research Group (ISRG)](https://www.abetterinternet.org/) 提供的服务。

我们以尽可能对用户友好的方式免费提供为网站启用 HTTPS（SSL/TLS）所需的数字证书。 这是因为我们想要创建一个更安全，更尊重隐私的 Web 环境。

Let’s Encrypt的关键原则为：

- **免费：** 任何拥有域名的人都可以使用 Let’s Encrypt 免费获取受信的证书。
- **自动化：** 运行于服务器上的软件可以与 Let’s Encrypt 直接交互，以便轻松获取证书，安全地配置它，并自动进行续期。
- **安全：** Let’s Encrypt 将成为一个推动 TLS 安全最佳实践发展的的平台，无论是作为一个证书颁发机构（CA）还是通过帮助网站运营商正确地保护其服务器。
- **透明：** 所有颁发或吊销的证书将被公开记录，供任何人查阅。
- **打开：** 自动签发和续订协议 [已经发布](https://tools.ietf.org/html/rfc8555) 作为其他人可以采用的开放标准。
- **乐于合作：** 就像互联网底层协议本身一样，Let’s Encrypt 是为了让整个互联网社区受益而做出的共同努力，它不受任何单一组织的控制。



:::tip TIP

本文默认使用 root 用户

Let’s Encrypt 证书有效期为 3个月，每3个月需要更新一次证书

:::

## 阿里云域名

### 安装Certbot 和 certbot-dns-aliyun

1. 安装 Python3

   ```bash
   yum install -y python3
   ```

2. 创建并激活虚拟环境

   ```bash
   mkdir -p /mnt/certbot
   cd /mnt/certbot
   python3 -m venv venv
   source venv/bin/activate
   ```

3. 安装Certbot 和 certbot-dns-aliyun

   ```bash
   pip3 install --upgrade pip
   pip install certbot certbot-nginx certbot-dns-aliyun
   ```

### 申请并配置阿里云DNS访问密钥

前往 [https://ram.console.aliyun.com](https://ram.console.aliyun.com/) 申请阿里云子账号并授予 **`AliyunDNSFullAccess`** 权限。然后为子账号创建 AccessKey 并记录。

创建 certbot-dns-aliyun 配置文件：

```bash
cat > /mnt/certbot/credentials.ini <<EOF
certbot_dns_aliyun:dns_aliyun_access_key = your accessKey
certbot_dns_aliyun:dns_aliyun_access_key_secret = your accessKeySecret
EOF
```

修改文件权限

```bash
chmod 600 /mnt/certbot/credentials.ini
```

### 申请证书

```bash
# yourdomain.com 替换为你的真实域名
/mnt/certbot/venv/bin/certbot certonly \
-a certbot-dns-aliyun:dns-aliyun \
--certbot-dns-aliyun:dns-aliyun-credentials /mnt/certbot/credentials.ini \
-d yourdomain.com \
-d "*.yourdomain.com"
```

### 配置自动续订

创建定时任务，自动续订证书，不用每3个月手动更新证书

```bash
echo "0 3 * * * root && /mnt/certbot/venv/bin/certbot renew -q && systemctl restart nginx" | sudo tee -a /etc/crontab > /dev/null
```

### 配置 Nginx

:::warning 注意

所有 **`yourdomain.com`** 请替换成你的真实域名

:::

```bash
vim /etc/nginx/conf.d/nginx.header
```

复制粘贴以下内容

```bash
listen 80;
listen 443 ssl;
if ($scheme != https) {
    rewrite ^/(.*) https://$server_name/$1 permanent;
} 
ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
ssl_session_cache shared:le_nginx_SSL:10m;
ssl_session_timeout 1440m;

ssl_protocols TLSv1.2 TLSv1.3;
ssl_prefer_server_ciphers off;

ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";

```

修改域名配置

```bash
vim /etc/nginx/conf.d/yourdomain.com.conf
```

复制粘贴以下内容

```bash
server {
    server_name  yourdomain.com;
    # 添加通用配置
    include      /etc/nginx/conf.d/nginx.header;
 
    location / {
        proxy_set_header  Host $host;  
        proxy_set_header  X-Real-IP $remote_addr;  
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;  
        proxy_set_header  X-Forwarded-Proto $scheme;  
 
        proxy_pass http://127.0.0.1:8080;
    }
}
```

### 重启 Nginx

```bash
systemctl restart nginx
```

访问你的域名查看证书

![image-20220315220059990](https://gitee.com/mhxs5555/image/raw/master/docs/2022-03/202203152201076.png)
