# 安装 Java

## 安装

下载 [Java Server JRE 8](https://www.oracle.com/java/technologies/downloads/#sjre8-linux)

上传文件到服务器，并解压至 `/usr/local/java`

```bash
$ sudo mkdir -p /usr/local/java
$ sudo tar -zxvf server-jre-8u321-linux-x64.tar.gz -C /usr/local/java
```

## 配置环境变量

```bash
$ sudo vim /etc/profile
```

复制下面内容到最后一行

```bash
export JAVA_HOME=/usr/local/java/jdk1.8.0_321
export PATH=$PATH:$JAVA_HOME/bin
```

```bash
# 让配置生效
source /etc/profile
```

验证Java是否可用

```bash
java -version
# 输出版本信息
java version "1.8.0_321"
Java(TM) SE Runtime Environment (build 1.8.0_321-b07)
Java HotSpot(TM) 64-Bit Server VM (build 25.321-b07, mixed mode)
```

