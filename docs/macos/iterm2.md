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
		# 是否继续链接
    "yes/no"    { send "yes\r"; exp_continue; }
    # 输入密码
    "*assword:*" { send "$password\r" }
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

![image-20220314200656500](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203142007112.png)

![image-20220314201017614](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203142010642.png)

5. 打开 Profile

   ![202203142031310](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203142035775.jpg)

![image-20220314202842597](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203142028634.png)

## 插件

