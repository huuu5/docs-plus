# 配置

## 切换终端

```bash
chsh -s /bin/zsh
```

## 开启任何来源

允许系统安装非 `AppStore` 的应用程序

```bash
sudo spctl --master-disable
```

![image-20220306151728392](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203061517441.png)

## 安装 Command Line Tools

```bash
xcode-select --install
```

验证安装结果

```bash
xcrun --version
# 版本信息
xcrun version 60.
```



:::tip 提示

安装后的路径

/Library/Developer/CommandLineTools/

:::

## 安装 iterm2

[下载iterm2](https://iterm2.com/downloads/stable/latest)，解压后把文件拖入应用程序

![image-20220306152426434](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203061524463.png)

## 安装 oh-my-zsh

:::tip 提示

**oh my zsh**  [官网地址](https://ohmyz.sh/)  [Github](https://github.com/ohmyzsh/ohmyzsh)

:::

### 安装

使用 curl 安装

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

使用 wget 安装

```bash
sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

**如果GitHub访问慢，使用该 [下载](/docs/ohmyzsh-install.sh) ，在终端执行该脚本**

```bash
# 配置可执行权限
chmod +x ./ohmyzsh-install.sh
# 执行脚本
./ohmyzsh-install.sh
```

![image-20220306160318612](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203061603659.png)

### 配置主题

```bash
vim ~/.zhsrc
```

![image-20220306161348569](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203061613601.png)

默认主题是 `ZSH_THEME="robbyrussell"`，你替换成其他主题，比如 `agnoster`，保存后，在终端输入 `source ~/.zshrc`, 主题发生改变

![image-20220306165123422](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203061651443.png)

[更多主题](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)

### 插件

oh-my-zsh 自带的插件都存储在 `~/.oh-my-zsh/plugins` 目录中，安装新插件，可在 `~/.zshrc`  的`plugins=(git) `这一行加入插件名称, 比如添加一个 [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md) 命令高亮的插件

![image-20220306163236475](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203061632505.png)

如果你需要安装第三方插件和主题，需要在 `~/.zshrc` 最后一行加入 `source /path/to/plugin`

```bash
source ~/.zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

效果

![image-20220306164514072](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203061645103.png)

### FAQ

**Q**: 切换主题后出现乱码？

**A**: 这是因为系统缺少字体导致的，下载 [Powerline Fonts](https://github.com/powerline/fonts)，安装完成后配置如下

![image-20220306165925477](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203061659526.png)