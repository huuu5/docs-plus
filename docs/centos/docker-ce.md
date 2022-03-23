# 安装 docker-ce

## 1. 卸载已安装的 docker

```bash
sudo yum remove docker docker-common docker-selinux docker-engine
```

##  2. 安装必要的一些系统工具

```bash
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

## 3. 添加软件源信息

```bash
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

## 4. 替换为阿里云仓库地址

```bash
sudo sed -i 's+download.docker.com+mirrors.aliyun.com/docker-ce+' /etc/yum.repos.d/docker-ce.repo
```

## 5. 更新并安装docker-ce

```bash
sudo yum makecache fast
sudo yum -y install docker-ce
```

## 6. 开启Docker服务

```bash
# 启动docker服务
sudo systemctl start docker
# 设置开机启动
sudo systemctl enable docker
```

## 7. docker0防火墙配置

```bash
sudo firewall-cmd --permanent --zone=docker --add-interface=docker0
sudo systemctl restart firewalld
sudo systemctl restart docker
```

