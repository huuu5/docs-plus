# 安装Nginx



## 1.安装准备

```bash
$ sudo yum install yum-utils
```

## 2.创建yum repository

```bash {1-2}
# 创建 nginx 仓库
$ sudo vim /etc/yum.repos.d/nginx.repo
# 粘贴下面内容
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true

[nginx-mainline]
name=nginx mainline repo
baseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/
gpgcheck=1
enabled=0
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
```

## 3.设置 nginx 安装包

```bash
$ sudo yum-config-manager --enable nginx-mainline
```

## 4.安装Nginx

```bash
$ sudo yum install nginx
```

## 5.启动Nginx

```bash
$ sudo systemctl start nginx
# 设置开机启动
$ sudo systemctl enable nginx
```

在浏览器输入服务器地址访问

![image-20210410155231599](https://gitee.com/huuu5/image/raw/master/blog/2021/04/image-20210410155231599.png)