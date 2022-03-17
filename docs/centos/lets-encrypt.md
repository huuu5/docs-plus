# Let's Encrypt免费泛域名证书

:::tip TIP

本文默认使用 root 用户

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

