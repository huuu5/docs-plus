# Jenkins

## 安装

### 使用 docker 安装

```bash
docker run -u root -d --name=jenkins \
--restart=always \
-p 8080:8080 -p 50000:50000 \
-v /var/jenkins_home:/var/jenkins_home \
-v /usr/bin/docker:/usr/bin/docker \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /usr/local/bin/docker-compose:/usr/local/bin/docker-compose \
-v /etc/localtime:/etc/localtime \
 jenkins/jenkins:lts-jdk11
```

**命令解读：**

**-u root 使用 root 用户操作**

**-d 后台运行镜像**

**--restart=always 总是自动启动**

**-p 8080:8080 将镜像的8080端口映射到服务器的8080端口**

**-p 50000:50000 将镜像的50000端口映射到服务器的50000端口**

**-v /var/jenkins_home:/var/jenkins_home 将容器内的Jenkins工作目录映射到宿主机上**

**-v /usr/bin/docker:/usr/bin/docker	将宿主机上面的docker命令行挂载到容器上面**

**-v /var/run/docker.sock:/var/run/docker.sock 将宿主机上面的docker监听文件挂在到容器上面**

**-v /usr/local/bin/docker-compose:/usr/local/bin/docker-compose	将宿主机上面的docker-compose命令行挂载到容器上面**

**-v /etc/localtime:/etc/localtime 让容器使用和服务器同样的时间设置**



### 使用 yum 安装

```bash
# 下载Jenkins镜像仓库
$ sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo --no-check-certificate
$ sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
# 安装 openJdk11
$ sudo yum install -y java-11-openjdk
# 安装 Jenkins
$ sudo yum install -y jenkins
# 重新加载服务配置
$ sudo systemctl daemon-reload
# 启动 Jenkins
$ sudo systemctl start jenkins
```



### 查看初始密码

```bash
# docker 安装
docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
# yum 安装
cat /var/lib/jenkins/secrets/initialAdminPassword
```

![image-20220313190358522](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203131903551.png)

### 安装插件，点击 `安装推荐的插件`。

![image-20220313193716462](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203131937503.png)



![image-20220313190709684](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203131907713.png)

### 创建管理员账户

点击 `保存并完成` 进入系统

![image-20220313192654968](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203131926004.png)

![image-20220313203627608](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203132036655.png)