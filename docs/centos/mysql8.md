# 安装 MySQL8

## 准备工作

```bash
rpm -qa | grep mariadb
# mariadb-libs-5.5.68-1.el7.x86_64
```

## 删除 mariadb

```bash
sudo rpm -e --nodeps mariadb-libs-5.5.68-1.el7.x86_64
```

## 两种安装方式

### 通过 Yum Repository 安装

### 1. 下载 MySQL Yum Repository

```bash
wget https://repo.mysql.com/mysql80-community-release-el7-5.noarch.rpm
```

### 2.  安装软件包

```bash
sudo rpm -ivh mysql80-community-release-el7-5.noarch.rpm
```

安装完毕后，在 /etc/yum.repos.d/ 下多了 mysql-community.repo 和 mysql-community-source.repo 这两个文件，它们分别是 MySQL 社区版 RPM 包和源码包的 Yum 源文件，里面记录了支持的软件版本和下载相关的一些参数。

### 3. 使用 yum 安装 MySQL8

用 cat 命令截取 mysql-community.repo 的部分内容，如下所示：

```bash
# Enable to use MySQL 5.7
[mysql57-community]
name=MySQL 5.7 Community Server
baseurl=http://repo.mysql.com/yum/mysql-5.7-community/el/7/$basearch
enabled=0
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql-2022
       file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql

[mysql80-community]
name=MySQL 8.0 Community Server
baseurl=http://repo.mysql.com/yum/mysql-8.0-community/el/7/$basearch
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql-2022
       file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql

```

可以看出，最新 GA 版本 8.0 的 enabled=1，其它版本均为 0。如果安装最新 GA 版本的 MySQL，则不用做任何设置， 直接执行如下命令：

```bash
sudo yum install -y mysql-community-server
```

### 

### 通过 RPM 安装

### 1. 下载 MySQL 安装包, [点击下载](https://dev.mysql.com/downloads/mysql/)

![image-20220305175545939](https://gitee.com/mhxs5555/image/raw/master/blog/2022/03/202203051755981.png)

### 2. 上传到服务器，解压

```bash
sudo tar -xvf mysql-8.0.28-1.el7.x86_64.rpm-bundle.tar
# 解压得到以下文件
mysql-community-client-8.0.28-1.el7.x86_64.rpm
mysql-community-client-plugins-8.0.28-1.el7.x86_64.rpm
mysql-community-common-8.0.28-1.el7.x86_64.rpm
mysql-community-devel-8.0.28-1.el7.x86_64.rpm
mysql-community-embedded-compat-8.0.28-1.el7.x86_64.rpm
mysql-community-icu-data-files-8.0.28-1.el7.x86_64.rpm
mysql-community-libs-8.0.28-1.el7.x86_64.rpm
mysql-community-libs-compat-8.0.28-1.el7.x86_64.rpm
mysql-community-server-8.0.28-1.el7.x86_64.rpm
mysql-community-test-8.0.28-1.el7.x86_64.rpm
```

### 3. 使用 RPM 安装 MySQL

```bash
# 按照顺序执行
sudo rpm -ivh mysql-community-common-8.0.28-1.el7.x86_64.rpm
sudo rpm -ivh mysql-community-client-plugins-8.0.28-1.el7.x86_64.rpm
sudo rpm -ivh mysql-community-client-8.0.28-1.el7.x86_64.rpm
sudo rpm -ivh mysql-community-libs-8.0.28-1.el7.x86_64.rpm
sudo rpm -ivh mysql-community-icu-data-files-8.0.28-1.el7.x86_64.rpm
sudo rpm -ivh mysql-community-server-8.0.28-1.el7.x86_64.rpm
```

## 配置 MySQL

### 1. 配置 my.conf

```bash
sudo vim /etc/my.cnf
```

复制下面配置信息，并保存

```
[client]
default-character-set=utf8mb4

[mysql]
default-character-set=utf8mb4

[mysqld]
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock

log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid

port=3306

server-id=1


log-bin=mysql-bin # 开启binlog

skip_name_resolve=1

max_connections=1000
character-set-server=utf8mb4
default-storage-engine=INNODB
lower_case_table_names=1 # 表名大小不敏感
max_connect_errors=100

collation-server=utf8mb4_unicode_ci
init_connect='SET NAMES utf8mb4'
default-time-zone='+8:00' 

sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
```

### 2. 启动 MySQL

```bash
sudo systemctl start mysqld
```

### 3. 查找root初始密码

```bash
sudo grep password /var/log/mysqld.log
# 查询到root密码
A temporary password is generated for root@localhost: ygsoA2k1v#m;
```

![image-20220305190033790](https://gitee.com/mhxs5555/image/raw/master/blog/2022/03/202203051900833.png)

### 4. 运行MySQL安全配置脚本 mysql_secure_installation 

```bash
sudo mysql_secure_installation
```

```bash
Securing the MySQL server deployment.
# 输入root初始密码
Enter password for user root:

The existing password for the user account root has expired. Please set a new password.
# 设置新密码
New password:
# 再次输入新密码
Re-enter new password:
The 'validate_password' component is installed on the server.
The subsequent steps will run with the existing configuration
of the component.
Using existing password for root.

Estimated strength of the password: 100
# 设置 root 用户密码
Change the password for root ? ((Press y|Y for Yes, any other key for No) : y
# 设置新密码
New password:
# 再次输入新密码
Re-enter new password:

Estimated strength of the password: 100
# 是否使用新密码
Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) : y
By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them. This is intended only for
testing, and to make the installation go a bit smoother.
You should remove them before moving into a production
environment.
# 是否删除匿名用户
Remove anonymous users? (Press y|Y for Yes, any other key for No) : y
Success.


Normally, root should only be allowed to connect from
'localhost'. This ensures that someone cannot guess at
the root password from the network.
# 是否禁用root用户远程登录
Disallow root login remotely? (Press y|Y for Yes, any other key for No) : n

 ... skipping.
By default, MySQL comes with a database named 'test' that
anyone can access. This is also intended only for testing,
and should be removed before moving into a production
environment.

# 是否删除 test 数据库
Remove test database and access to it? (Press y|Y for Yes, any other key for No) : y
 - Dropping test database...
Success.

 - Removing privileges on test database...
Success.

Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.
# 是否现在重载权限
Reload privilege tables now? (Press y|Y for Yes, any other key for No) : y
Success.

All done!
```

### 5. 登录 MySQL

```bash
sudo mysql -uroot -p
```

![image-20220305191043210](https://gitee.com/mhxs5555/image/raw/master/blog/2022/03/202203051910241.png)

### 6. 设置 root 外网访问

```bash
mysql> use mysql;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> update user set host='%' where user='root';
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> flush privileges;
Query OK, 0 rows affected (0.01 sec)
```

### 7. 开机启动

```bash
sudo systemctl enable mysqld
```

