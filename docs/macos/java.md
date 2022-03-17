# Java 安装

## 安装

### JDK1.8

苹果 Apple Silicon 芯片, [下载地址](https://cdn.azul.com/zulu/bin/zulu8.58.0.13-ca-jdk8.0.312-macosx_x64.dmg)

Intel 芯片，[下载地址](https://www.oracle.com/java/technologies/downloads/#java8-mac)

验证安装结果

```bash
java -version
# 输出版本信息
openjdk version "1.8.0_312"
OpenJDK Runtime Environment (Zulu 8.58.0.13-CA-macos-aarch64) (build 1.8.0_312-b07)
OpenJDK 64-Bit Server VM (Zulu 8.58.0.13-CA-macos-aarch64) (build 25.312-b07, mixed mode)
```

### JDK17

[下载地址](https://www.oracle.com/java/technologies/downloads/#jdk17-mac)

验证安装结果

```bash
java -version
# 输出版本信息
java version "17.0.1" 2021-10-19 LTS
Java(TM) SE Runtime Environment (build 17.0.1+12-LTS-39)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.1+12-LTS-39, mixed mode, sharing)
```



## JDK多版本管理

:::tip 提示

系统可以安装多个JDK版本，最后安装的版本为系统默认版本

:::

编辑 .zshrc

```bash
vim ~/.zshrc
```

添加 jdk 安装环境，**请结合自己实际情况修改**

```bash
# JDK
# set jdk1.8
export JAVA_8_HOME="/Library/Java/JavaVirtualMachines/jdk1.8.0_312.jdk/Contents/Home"
# set jdk17
export JAVA_17_HOME="/Library/Java/JavaVirtualMachines/jdk17.0.1.jdk/Contents/Home"
# set default java version
export JAVA_HOME=$JAVA_8_HOME

# alias 命令动态切换版本
alias jdk8="export JAVA_HOME=$JAVA_8_HOME"
alias jdk17="export JAVA_HOME=$JAVA_17_HOME"
```

使用 source 命令更新配置，使配置生效

```bash
source ~/.zshrc
```

切换 jdk 版本

```bash
# Java 8
jdk8
# Java 17
jdk17
```

