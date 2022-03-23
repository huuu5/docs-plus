# ITERM2

## 一键登录服务器

1. 编写 **expect** 自动化脚本

```bash
# 切换 ssh 目录
cd ~/.ssh
# 创建登录脚本文件
touch ssh_login
# 编辑脚本
vim ssh_login
```

2. 复制下面内容到脚本内

```bash
#!/usr/bin/expect -f
set user "用户名"
set password "密码"
set host "服务器IP"
set port "端口号"

# 登录服务器
spawn ssh -p$port $user@$host

expect {
    # 是否继续连接
    "yes/no"
    { send "yes\r"; exp_continue; }
    # 输入密码
    "*assword:*"
    { send "$password\r" }
}

interact
expect eof
```

3. 赋予脚本执行权限

```bash
chmod +x ssh_login
```

4. 配置 Profile

   打开 iterm2，菜单栏 -> Profile -> open profile ,  新建 profile

![image-20220314200656500](https://gitee.com/mhxs5555/image/raw/master/docs/2022/03/202203142007112.png)

![image-20220314201017614](https://gitee.com/mhxs5555/image/raw/master/docs/2022/03/202203142010642.png)

5. 打开 Profile

   ![202203142031310](https://gitee.com/mhxs5555/image/raw/master/docs/2022/03/202203142035775.jpg)

![image-20220314202842597](https://gitee.com/mhxs5555/image/raw/master/docs/2022/03/202203142028634.png)

## oh-my-zsh插件

### extract

提供一个 extract 命令，以及它的别名 x。功能是：一！键！解！压！， tar, gz, zip, rar 全部使用 extract 命令解压。

```bash
x demo.zip
```

### zsh-syntax-highlighting

这个插件作用是在输入过程中就会提示你，当前命令是否正确，错误红色，正确绿色命令高亮, 正确路径自带下划线 [Github](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md)

安装

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

```bash
echo "source ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ~/.zshrc
```

```bash
vim ~/.zshrc
# 添加插件
plugins=(git zsh-syntax-highlighting)
```

```bash
source ~/.zshrc
```



### zsh-autosuggestions

会记录你之前输入过的所有命令，并且自动匹配你可能想要输入命令，然后按Tab键补全 [Github](https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md)

安装

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

```bash
echo "source ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh" >> ~/.zshrc
```

```bash
vim ~/.zshrc
# 添加插件
plugins=(git zsh-syntax-highlighting zsh-autosuggestions)
```

```bash
source ~/.zshrc
```



## 快捷键

**标签**

1. 新建标签：command + t
2. 关闭标签：command + w
3. 切换标签：command + 数字 command + 左右方向键
4. 切换全屏：command + enter

**分屏**

1. 垂直分屏：command + d
2. 水平分屏：command + shift + d
3. 切换屏幕：command + option + 方向键 command + [ 或 command + ]

**其他快捷键**

1. tab 标签切换：command + 数字
2. 清屏：command + r 
3. 剪切板历史：command + shift + h
4. 清除当前行： command + u 
4. 查找：command + f 
