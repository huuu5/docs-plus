# MySQL

## 安装

### 使用 `brew` 安装

```bash
brew install mysql
```

```bash
# 输出内容
==> Downloading https://mirrors.ustc.edu.cn/homebrew-bottles/bottles/mysql-8.0.27.big_sur.bottle.tar.gz
Already downloaded: /Users/hu/Library/Caches/Homebrew/downloads/5fb5b8d9410d1e6c4c0d9dcab7f30d9ec47643eea70111da7a0db0ac8f967317--mysql-8.0.27.big_sur.bottle.tar.gz
==> Pouring mysql-8.0.27.big_sur.bottle.tar.gz
==> /usr/local/Cellar/mysql/8.0.27/bin/mysqld --initialize-insecure --user=hu --basedir=/usr/local/Cellar/mysql/8.0.27 --datadir=/usr/local/var/mysql --tmpdir=/tmp
==> Caveats
We've installed your MySQL database without a root password. To secure it run:
    mysql_secure_installation

MySQL is configured to only allow connections from localhost by default

To connect run:
    mysql -uroot

To restart mysql after an upgrade:
  brew services restart mysql
Or, if you don't want/need a background service you can just run:
  /usr/local/opt/mysql/bin/mysqld_safe --datadir=/usr/local/var/mysql
==> Summary
🍺  /usr/local/Cellar/mysql/8.0.27: 304 files, 294MB
```

从输出内容可看到 `MySQL` 的安装目录(**英特尔芯片**)是 `/usr/local/Cellar/mysql/8.0.27` , 苹果自研 **`Apple Silicon`** `MySQL`的安装目录是 `/opt/homebrew/Cellar/mysql/8.0.27`

### 启动服务

```bash
brew services start mysql
# 输出结果
==> Successfully started `mysql` (label: homebrew.mxcl.mysql)
```

## 配置

:::tip 提示

brew 安装 MySQL 是没有初始密码的，通过下面配置来设置密码

:::

### 设置密码

```bash
mysql_secure_installation
```

1. 是否验证密码强度，输入： n

```bash
Securing the MySQL server deployment.

Connecting to MySQL using a blank password.

VALIDATE PASSWORD COMPONENT can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD component?

Press y|Y for Yes, any other key for No: n
```

2. 设置新密码， 输入你想设置的密码


```bash
Please set the password for root here.

New password: 

Re-enter new password:
```

3. 是否删除匿名用户，输入：y

```bash
By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them. This is intended only for
testing, and to make the installation go a bit smoother.
You should remove them before moving into a production
environment.

Remove anonymous users? (Press y|Y for Yes, any other key for No) : y
Success.
```



4. 是否禁用 `root` 远程登录 , 输入：n

```bash
Normally, root should only be allowed to connect from
'localhost'. This ensures that someone cannot guess at
the root password from the network.

Disallow root login remotely? (Press y|Y for Yes, any other key for No) : n

```

5. 是否删除测试数据库，输入：y

```bash
 ... skipping.
By default, MySQL comes with a database named 'test' that
anyone can access. This is also intended only for testing,
and should be removed before moving into a production
environment.


Remove test database and access to it? (Press y|Y for Yes, any other key for No) : y
 - Dropping test database...
Success.

 - Removing privileges on test database...
Success.
```

6. 是否现在刷新权限, 输入：y

```bash
Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.

Reload privilege tables now? (Press y|Y for Yes, any other key for No) : y
Success.

All done!
```

### 配置 my.cnf

复制下面内容到 `my.cnf` 

**`英特尔`** 芯片机器位置：`/usr/local/etc/my.cnf`

苹果自研 **`Apple Silicon`**:  `/opt/homebrew/etc/my.cnf`

```bash
[mysqld]

port=3306

log-bin=mysql-bin # 开启binlog
max_connections=1000
character-set-server=utf8mb4
default-storage-engine=INNODB
max_connect_errors=100

collation-server=utf8mb4_unicode_ci
init_connect='SET NAMES utf8mb4'
default-time-zone='+8:00' 
```



## FAQ

**Q：怎样安装 MySQL5.7**

A：在安装命令后面加上版本号

```bash
brew install mysql@5.7
```

**Q：使用 `brew services start mysql` 启动不了 `MySQL5.7`**

A：在启动命令后面加上版本号

```bash
brew services start mysql@5.7
```

**Q：MySQL8 降级到 MySQL5.7**

A: 先卸载 MySQL8 相关文件，在安装 MySQL5.7

```bash
# 卸载 MySQL8
brew remove mysql
# 删除 MySQL8 数据目录
rm -rf /usr/local/var/mysql # 英特尔芯片
rm -rf /opt/homebrew/var/mysql # M1芯片
# 删除 MySQL8 my.cnf, 不删除该文件，有可能启动不了 MySQL5.7
rm -rf /usr/local/ect/my.cnf # 英特尔芯片
rm -rf /opt/homebrew/ect/my.cnf # M1芯片
# 清除缓存
brew cleanup
# 安装MySQL5.7
brew install mysql@5.7
```

安装完成后，执行上面的[配置教程](/macos/mysql.html#配置)即可

**Q：MySQL8 配置lower-case-table-names=1 大小写不敏感后无法启动**

A：这是因为MySQL8 在初始化的时候，默认大小写敏感且不能通过配置修改，需要删除数据目录，重新初始化。

**先备份好数据库，再执行下面操作。**

**先备份好数据库，再执行下面操作。**

**先备份好数据库，再执行下面操作**。

```bash
# 停止MySQL服务
brew services stop mysql
# 删除数据目录
rm -rf /usr/local/var/mysql/* # 英特尔芯片
rm -rf /opt/homebrew/var/mysql/* # M1芯片
# 初始化MySQL
mysqld --initialize-insecure --lower-case-table-names=1 --user=你的个人用户目录名称
# 启动MySQL服务
brew services start mysql
```

启动完服务后，再次执行上面的[配置教程](/macos/mysql.html#配置)即可

**Q：Host is blocked because of many connection errors; unblock with ‘mysqladmin flush-hosts’**

A: 这个的意思是当一个ip连续多次出现错误后,mysql就会 [中断](https://so.csdn.net/so/search?q=中断&spm=1001.2101.3001.7020)这个ip的连接,抛出mysqladmin flush-host

解决方法

```bash
mysqladmin  -u  root  -p  flush-hosts
```

