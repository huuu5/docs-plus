# 安装 Rabbitmq

## 使用docker安装

### 下载镜像

```bash
docker pull rabbitmq:management
```

### 安装

```bash
docker run -dit --restart=always --name rabbitmq -p 15672:15672 -p 5672:5672 rabbitmq:management
```



## 使用 Yum 安装

### 安装 Erlang

下载 erlang 仓库

```bash
curl -s https://packagecloud.io/install/repositories/rabbitmq/erlang/script.rpm.sh | sudo bash
```

命令执行完成后，文件存在 `/etc/yum.repos.d/rabbitmq_erlang.repo`

安装

```bash
yum install -y erlang
```



### 安装 Rabbitmq

下载 rabbitmq-server 仓库

```bash
curl -s https://packagecloud.io/install/repositories/rabbitmq/rabbitmq-server/script.rpm.sh | sudo bash
```

命令执行完成后，文件存在 `/etc/yum.repos.d/rabbitmq_rabbitmq-server.repo`

安装

```bash
# 安装一些依赖
yum install -y socat logrotate 
# 安装 rabbitmq
yum install -y rabbitmq-server
```

启动服务

```bash
systemctl start rabbitmq-server
```

停止服务

```bash
systemctl stop rabbitmq-server
```

开机启动

```bash
systemctl enable rabbitmq-server
```

启用 rabbitmq_management

```bash
rabbitmq-plugins enable rabbitmq_management
```



## 安装插件

### 下载地址

[Community Plugins — RabbitMQ](https://www.rabbitmq.com/community-plugins.html)

### rabbitmq_delayed_message_exchange

**docker 安装方式**

```bash
# 复制插件到容器 plugins 目录
docker cp rabbitmq_delayed_message_exchange-3.9.0.ez rabbitmq:/plugins
# 进入容器
docker exec -it rabbitmq /bin/bash
# 切到 plugins 目录
cd /plugins
# 修改插件权限
chmod 777 rabbitmq_delayed_message_exchange-3.9.0.ez
```

**yum 安装方式**

```bash
cp rabbitmq_delayed_message_exchange-3.9.0.ez /usr/lib/rabbitmq/lib/rabbitmq_server-3.9.13/plugins/
```

**启用插件**

```bash
# 启用插件
rabbitmq-plugins enable rabbitmq_delayed_message_exchange

```

**禁用插件**

```bash
rabbitmq-plugins disable rabbitmq_delayed_message_exchange
```





## 访问管理网页

http://服务器IP:15672

用户名密码：guest/guest

![image-20220320111540585](https://gitee.com/mhxs5555/image/raw/master/docs/2022/03/202203201115971.png)

## FAQ

**Q：服务正常，外网访问不了？**

A：检查防火墙是否开放端口

**Q：登录管理端网页，提示：User can only log in via localhost** 

![image-20220320111651980](https://gitee.com/mhxs5555/image/raw/master/docs/2022/03/202203201116009.png)

A：RabbitMQ默认只有一个guest帐号，guest帐号只能在RabbitMQ安装服务器上登录，在其它服务器用guest登录提示User can only log in via localhost。

解决方案添加一个新账号

```bash
# 1.添加 admin 账号并设置密码
rabbitmqctl add_user admin 123456
# 2.设置 admin 角色为 administrator
rabbitmqctl set_user_tags admin administrator
# 3.设置 admin 用户的权限，指定允许访问的vhost以及write/read
rabbitmqctl set_permissions -p "/" admin ".*" ".*" ".*"
```

添加完成，使用 admin 账号登录即可
