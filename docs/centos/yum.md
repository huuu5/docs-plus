# Yum 配置



## 配置阿里云镜像

### 1. 备份

```bash
sudo mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
```

### 2. 下载阿里云仓库

```bash
sudo wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
```

或者

```bash
sudo curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
```

### 3. 替换阿里云链接

```bash
sudo sed -i -e '/mirrors.cloud.aliyuncs.com/d' -e '/mirrors.aliyuncs.com/d' /etc/yum.repos.d/CentOS-Base.repo
```

### 4. 生成缓存

```bash
# 清除缓存
sudo yum clean all
# 生成缓存
sudo yum makecache
```

## 安装软件

```bash
sudo yum install -y 软件名称
```

## 卸载软件

```bash
sudo yum remove -y 软件名称
```



## 安装软件到指定目录

```bash
sudo yum -c /etc/yum.conf --installroot=安装路径 --releasever=/  install 软件名
```



## 回退之前的操作

### 查询操作历史

```bash
yum history list 软件名称
```

![image-20220320212055895](https://gitee.com/mhxs5555/image/raw/master/docs/2022-03/202203202120006.png)

可以看到操作历史记录

### 回退操作数据

```bash
yum history undo 历史记录ID
```

