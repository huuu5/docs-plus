# 开发环境搭建

## 切换 zsh

:::tip TIP

macOS 版本 大于 10.15 可以跳过

:::

```bash
chsh -s /bin/zsh
```

## 开启任何来源

```bash
sudo spctl --master-disable
```

## 安装 brew

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

![image-20220305214336185](https://gitee.com/mhxs5555/image/raw/master/docs/2022-03/202203052143224.png)

:::tip TIP

新系统第一次安装会弹出系统软件安装窗口，点击安装，安装完，再次执行上面命令

:::

## Brew 安装软件

**`安装命令 brew install 软件名称`**

```bash
# Iterm2 终端
brew install iterm2
# Redis
brew install redis
# MySQL
brew install mysql
# Rabbitmq
brew install rabbitmq
# NodeJS
brew install node
```

## 启动 Redis、MySQL、Rabbitmq 服务

```bash
# 开机自启，停止使用 stop
brew services start redis	
brew services start mysql
brew services start rabbitmq
```

## 配置NodeJS

```bash
# 使用淘宝镜像
npx nrm use taobao
```

## JDK 安装

### JDK1.8

Apple Silicon 芯片, 下载地址 https://cdn.azul.com/zulu/bin/zulu8.58.0.13-ca-jdk8.0.312-macosx_x64.dmg

Intel 芯片，下载地址 https://www.oracle.com/java/technologies/downloads/#java8-mac

验证安装结果

```bash
java -version
# 输出版本信息
openjdk version "1.8.0_312"
OpenJDK Runtime Environment (Zulu 8.58.0.13-CA-macos-aarch64) (build 1.8.0_312-b07)
OpenJDK 64-Bit Server VM (Zulu 8.58.0.13-CA-macos-aarch64) (build 25.312-b07, mixed mode)
```

### JDK17

下载地址 https://www.oracle.com/java/technologies/downloads/#jdk17-mac

验证安装结果

```bash
java -version
# 输出版本信息
java version "17.0.1" 2021-10-19 LTS
Java(TM) SE Runtime Environment (build 17.0.1+12-LTS-39)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.1+12-LTS-39, mixed mode, sharing)
```

## IDEA 安装

### 下载

下载地址 https://www.jetbrains.com/idea/download/other.html

### 无限试用

1. [插件下载](https://plugins.zhile.io/files/ide-eval-resetter-2.3.5-c80a1d.zip)

2. 安装插件，Preferences(首选项) -> Plugins(插件) ->  Install Plugin from Disk(从磁盘安装插件) , 安装完成后 点击OK(确定)

![image-20220305224754935](https://gitee.com/mhxs5555/image/raw/master/docs/2022-03/202203052247985.png)

3. 点击菜单栏 Help(帮助) -> Eval Reset，勾选以下选项，点击 Reset

![image-20220305225516400](https://gitee.com/mhxs5555/image/raw/master/docs/2022-03/202203052255456.png)

4. 无限试用完成

### Maven 配置

选择本地Maven目录

![image-20220305225904550](https://gitee.com/mhxs5555/image/raw/master/docs/2022-03/202203052259610.png)

### Tomcat 配置

点击 **`+`** ，配置本地Tomcat路径

![image-20220305230206437](https://gitee.com/mhxs5555/image/raw/master/docs/2022-03/202203052302492.png)