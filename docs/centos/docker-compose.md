# 安装 docker-compose 

## 1. 下载 docker-compose

 从GitHub上下载

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

若是GitHub访问太慢，可以用daocloud下载

```bash
sudo curl -L "https://get.daocloud.io/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

## 2. 添加可执行权限

```bash
sudo chmod +x /usr/local/bin/docker-compose
```

:::tip TIP

如果安装后docker compose命令失败，请检查路径。还可以创建指向/usr/bin或路径中任何其他目录的符号链接。

```bash
 sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

:::

## 3.测试安装结果

```bash
docker-compose --version
# docker-compose version 1.29.2, build 5becea4c
```

