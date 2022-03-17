# Homebrew

## 介绍

`Homebrew` 是一款包管理工具，目前支持 `macOS` 和 `Linux` 系统。

## 安装

在终端输入下面命令，根据提示安装

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

![image-20220306181322578](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203061813599.png)

:::tip 提示

新系统第一次安装会弹出系统软件安装窗口，点击安装，安装完，再次执行上面命令

:::

## 软件安装

安装命令 **`brew install 软件名称`**

```bash
# 安装 Redis
brew install redis
# 安装 MySQL
brew install mysql
```

## 启动服务

启动命令  **`brew services start 软件名称`**

```bash
# 启动服务，并设置开机自启
brew services start redis	
brew services start mysql
```

## 停止服务

停止命令 **`brew services stop 软件名称`**

```bash
brew services stop redis
```

## 卸载软件

卸载命令 **`brew uninstall redis`**

```bash
brew uninstall redis
```

## 其他命令

搜索软件

```bash
brew serach 软件名称
```

查询软件信息

```bash
brew info 软件名称
```

更新

```bash
brew update
```

检测新版本

```bash
brew outdated
```

升级

```bash
# 升级所有
brew upgrade
# 指定升级软件
brew upgrade 软件名称
```

清理

```bash
# 清理不需要的版本及其安装缓存
brew cleanup
```

更多命令

```bash
man brew
```

