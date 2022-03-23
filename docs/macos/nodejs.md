# NodeJS 安装

## 安装

### 使用 brew 安装 (推荐)

安装最新版

```bash
brew install node
```

安装指定版本

```bash
# 软件名称 @ 版本号
brew install node@16
```

### 安装包安装

[官网下载](https://nodejs.org/en/)

![image-20220306204529962](https://gitee.com/mhxs5555/image/raw/master/docs/2022-03/202203062045021.png)

双击运行安装包，等待安装完成即可

## 配置镜像源

### 镜像连接切换

```bash
# 全局切换淘宝镜像源
npm config set registry http://registry.npm.taobao.org
# 全局切换官方镜像源
npm config set registry http://www.npmjs.org
```

### 使用 nrm 切换

安装 nrm

```bash
npm install -g nrm
```

查看镜像列表

```bash
nrm ls
```

```bash
# 输出内容
npm ---------- https://registry.npmjs.org/
yarn --------- https://registry.yarnpkg.com/
tencent ------ https://mirrors.cloud.tencent.com/npm/
cnpm --------- https://r.cnpmjs.org/
taobao ------- https://registry.npmmirror.com/
npmMirror ---- https://skimdb.npmjs.com/registry/
```

切换镜像

```sh
# 使用淘宝镜像
nrm use taobao
# 使用官方镜像
nrm use npm
```

### 查看镜像源

```bash
# 查看镜像
npm get registry
# 输出结果
https://registry.npmmirror.com/
# 或者
http://registry.npm.taobao.org
```

##  NVM 管理 nodejs

:::tip

nvm是node的包管理工具。由于在打开不同的项目时，不同的项目在安装依赖时可能会和node版本有关，所以这就需要我们在不同的项目下使用不同的node版本。
 nvm就是一个比较好用node管理工具，切换node版本。

:::

### 安装

```bash
brew install nvm
```

输出内容如下

```text
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/bottles/nvm-0.39.1_1.all.bottle.tar.gz
Already downloaded: /Users/hu/Library/Caches/Homebrew/downloads/0c5870e1c350c24f1247d1c5417814f12e3779330e08ec0e23ba8ec3c1dd1be8--nvm-0.39.1_1.all.bottle.tar.gz
==> Pouring nvm-0.39.1_1.all.bottle.tar.gz
==> Caveats
Please note that upstream has asked us to make explicit managing
nvm via Homebrew is unsupported by them and you should check any
problems against the standard nvm install method prior to reporting.

You should create NVM's working directory if it doesn't exist:

  mkdir ~/.nvm

Add the following to ~/.zshrc or your desired shell
configuration file:

  export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion

You can set $NVM_DIR to any location, but leaving it unchanged from
/opt/homebrew/opt/nvm will destroy any nvm-installed Node installations
upon upgrade/reinstall.

Type `nvm help` for further information.
==> Summary
🍺  /opt/homebrew/Cellar/nvm/0.39.1_1: 9 files, 184KB
==> Running `brew cleanup nvm`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
```

### 配置

创建 nvm 工作目录

```bash
mkdir ~/.nvm
```

复制终端输出内容里的环境配置，比如我的是如下内容，粘贴到 `~/.zshrc `并保存 ，执行 `source ~/.zshrc` , 是配置生效

```
export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
```

配置淘宝 node镜像, 编辑 `~/.zshrc`，粘贴下面内容并保存

```bash
export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node
```

```bash
# 使配置生效
source ~/.zshrc
```

### 安装 nodejs

```bash
# 查看nodejs版本
nvm ls-remote
# 安装nodejs
nvm install 16
```

安装完后查看

```bash
nvm ls
# 输出内容
->     v16.14.0
        v17.6.0
         system
default -> v16.14.0
iojs -> N/A (default)
unstable -> N/A (default)
node -> stable (-> v17.6.0) (default)
stable -> 17.6 (-> v17.6.0) (default)
lts/* -> lts/gallium (-> v16.14.0)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.10 (-> N/A)
lts/fermium -> v14.19.0 (-> N/A)
lts/gallium -> v16.14.0
```

可以看到，安装的是 v16 的稳定版本

安装最新版本

```bash
nvm install node
# 查看版本
node -v
v17.6.0
```

切换默认版本

```bash
nvm use 16
# 查看当前node版本
node -v
v16.14.0
```

删除一个nodejs 版本

```bash
nvm uninstall 16
```



### 常用命令

```bash
nvm install stable ## 安装最新稳定版 node
nvm install <version> ## 安装指定版本
nvm uninstall <version> ## 删除已安装的指定版本
nvm use <version> ## 切换使用指定的版本node
nvm ls ## 列出所有安装的版本
nvm ls-remote ## 列出所有远程服务器的版本
nvm current ## 显示当前的版本
nvm alias <name> <version> ## 给不同的版本号添加别名
nvm unalias <name> ## 删除已定义的别名
nvm reinstall-packages <version> ## 在当前版本 node 环境下，重新   全局安装指定版本号的 npm 包
nvm alias default [node版本号] ##设置默认版本
```

## FAQ

**Q:**  MacOS nodejs 安装 `node-sass` 报错 error: no template named `remove_cv_t` 的解决方案, 错信息如下

```
10065 error In file included from /Users/hu/.node-gyp/17.6.0/include/node/node.h:63:
10065 error In file included from /Users/hu/.node-gyp/17.6.0/include/node/v8.h:25:
10065 error In file included from /Users/hu/.node-gyp/17.6.0/include/node/v8-array-buffer.h:12:
10065 error In file included from /Users/hu/.node-gyp/17.6.0/include/node/v8-local-handle.h:12:
10065 error /Users/hu/.node-gyp/17.6.0/include/node/v8-internal.h:563:38: error: no template named 'remove_cv_t' in namespace 'std'; did you mean 'remove_cv'?
10065 error             !std::is_same<Data, std::remove_cv_t<T>>::value>::Perform(data);
10065 error                                 ~~~~~^~~~~~~~~~~
10065 error                                      remove_cv
10065 error /Library/Developer/CommandLineTools/SDKs/MacOSX12.1.sdk/usr/include/c++/v1/type_traits:710:50: note: 'remove_cv' declared here
10065 error template <class _Tp> struct _LIBCPP_TEMPLATE_VIS remove_cv
10065 error                                                  ^
```



**A:** 通过 <u>**.node-gyp/17.6.0/include/node/v8-internal.h:563:38: error: no template named 'remove_cv_t' in namespace 'std'; did you mean 'remove_cv'?**</u> 这行错误信息，可以看见是没有`remove_cv_t`导致的，于是前往`~/.node-gyp/17.6.0/include/node/v8-internal.h`，将563行的`remove_cv_t`改为`remove_cv`，保存后再次安装，此时编译正常通过，安装成功。



