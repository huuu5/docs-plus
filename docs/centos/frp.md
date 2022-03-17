# FRP 内网穿透

## 服务端

:::tip 提示

部署在公网服务器上

:::

### 创建配置文件

```bash
# 创建配置目录
$ sudo mkdir -p /etc/frp
# 创建配置文件
$ sudo touch /etc/frp/frps.ini
# 编辑配置文件
$ sudo vim /etc/frp/frps.ini
```

复制下面内容

```ini
[common]
# 绑定IP
bind_addr = 0.0.0.0
#绑定端口
bind_port = 7000
# http服务端口
vhost_http_port = 8080
# 客户端链接密钥
token = 123456
```

### docker 安装服务端

```bash
docker run --restart=always --network host -d -v /etc/frp/frps.ini:/etc/frp/frps.ini --name frps snowdreamtech/frps
```

```
2022/03/14 14:34:42 [I] [service.go:325] [17a3e23ea9f9c705] login to server success, get run id [17a3e23ea9f9c705], server udp port [0]
2022/03/14 14:34:42 [I] [proxy_manager.go:144] [17a3e23ea9f9c705] proxy added: [ssh]
2022/03/14 14:34:42 [I] [control.go:181] [17a3e23ea9f9c705] [ssh] start proxy success
```



## 客户端

:::tip 提示

部署在内网机器上

:::

### 创建配置文件

```ini
[common]
server_addr = 服务端IP
server_port = 7000
token = 123456

[ssh]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 7022
use_encryption = true
use_compression = true
```

### docker 安装客户端

```bash
docker run --restart=always --network host -d -v /etc/frp/frpc.ini:/etc/frp/frpc.ini --name frpc snowdreamtech/frpc
```

查看日志是否生效

```bash
docker logs frpc
```

可以看到 success 说明连接成功

```
2022/03/14 14:34:42 [I] [service.go:325] [17a3e23ea9f9c705] login to server success, get run id [17a3e23ea9f9c705], server udp port [0]
2022/03/14 14:34:42 [I] [proxy_manager.go:144] [17a3e23ea9f9c705] proxy added: [ssh]
2022/03/14 14:34:42 [I] [control.go:181] [17a3e23ea9f9c705] [ssh] start proxy success
```





## 配置

[服务端详细配置文档](https://gofrp.org/docs/reference/server-configures/)

[客户端详细配置文档](https://gofrp.org/docs/reference/client-configures/)

:::tip

以下配置都是修改内网机器上配置文件 frpc.ini

:::

### SSH 访问内网机器



```ini
[ssh]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 6022
```

### 自定义域名访问内网的 Web 服务

```ini
[web]
type = http
local_ip = 127.0.0.1
local_port = 80
custom_domains = www.yourdomain.com

[web2]
type = http
local_ip = 127.0.0.1
local_port = 8080
custom_domains = www.yourdomain2.com
```

### 远程 Windows 桌面

```ini
[remote-desktop]
type = tcp
# 机器IP
local_ip = 127.0.0.1
# 远程桌面端口
local_port = 3389
# 暴露外网远程桌面端口
remote_port = 63389
```

