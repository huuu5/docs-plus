# 安装 MySQL 5.7 

## 下载

上传安装包到服务器，[下载地址](https://downloads.mysql.com/archives/community/)

![image-20220305191813757](https://gitee.com/mhxs5555/image/raw/master/blog/2022/03/202203051918801.png)

## 安装

1. 查看已安装的MySQL

   ```bash
   sudo rpm -qa|grep mariadb
   sudo rpm -qa|grep mysql
   ```

2. 如果存在已安装MySQL，先全部卸载

   ```bash
   sudo rpm -e --nodeps mariadb-common-5.7.32-1.el7.x86_64
   ```

3. 解压安装包，会得到以下文件

   ```
   mysql-community-client-5.7.32-1.el7.x86_64.rpm
   mysql-community-libs-5.7.32-1.el7.x86_64.rpm
   mysql-community-common-5.7.32-1.el7.x86_64.rpm
   mysql-community-server-5.7.32-1.el7.x86_64.rpm
   ```

4. 安装，安装顺序不能乱

   ```bash
   sudo rpm -ivh mysql-community-common-5.7.32-1.el7.x86_64.rpm
   sudo rpm -ivh mysql-community-libs-5.7.32-1.el7.x86_64.rpm
   sudo rpm -ivh mysql-community-client-5.7.32-1.el7.x86_64.rpm
   sudo rpm -ivh mysql-community-server-5.7.32-1.el7.x86_64.rpm
   ```

5. 启动MySQL

   ```bash
   sudo systemctl start mysqld
   ```

6. 查找root初始密码

   ```bash
   grep password /var/log/mysqld.log
   ```

7. 运行MySQL安全配置脚本，重置root密码

   ```
   mysql_secure_installation
   [root@youxi1 ~]# mysql_secure_installation
    
   Securing the MySQL server deployment.
    
   Enter password for user root: 　　//输入root密码
   The 'validate_password' plugin is installed on the server.
   The subsequent steps will run with the existing configuration
   of the plugin.
   Using existing password for root.
    
   Estimated strength of the password: 25
   Change the password for root ? ((Press y|Y for Yes, any other key for No) : No　　//是否更改root密码，如果输入y会要求设置新的密码
    
    ... skipping.
   By default, a MySQL installation has an anonymous user,
   allowing anyone to log into MySQL without having to have
   a user account created for them. This is intended only for
   testing, and to make the installation go a bit smoother.
   You should remove them before moving into a production
   environment.
    
   Remove anonymous users? (Press y|Y for Yes, any other key for No) : y　　//是否删除匿名用户，建议y删除
   Success.
    
    
   Normally, root should only be allowed to connect from
   'localhost'. This ensures that someone cannot guess at
   the root password from the network.
    
   Disallow root login remotely? (Press y|Y for Yes, any other key for No) : y　　//是否禁止root远程登录，建议y禁止
   Success.
    
   By default, MySQL comes with a database named 'test' that
   anyone can access. This is also intended only for testing,
   and should be removed before moving into a production
   environment.
    
    
   Remove test database and access to it? (Press y|Y for Yes, any other key for No) : y　　//是否删除test数据库，y删除
    - Dropping test database...
   Success.
    
    - Removing privileges on test database...
   Success.
    
   Reloading the privilege tables will ensure that all changes
   made so far will take effect immediately.
    
   Reload privilege tables now? (Press y|Y for Yes, any other key for No) : y　　//是否重新加载权限表，y重新加载
   Success.
    
   All done!
   ```

   

8. 登录MySQL

   ```bash
   sudo mysql -uroot -p
   ```

## 配置

```bash
sudo vim /etc/my.cnf
```

具体配置

```
[client]
default-character-set = utf8mb4

[mysql]
default-character-set = utf8mb4

[mysqld]
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock

log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid

port=3306

server-id=1

log-bin=mysql-bin
skip_name_resolve=1

max_connections=1000
character-set-server=utf8mb4
default-storage-engine=INNODB
lower_case_table_names=1
max_connect_errors=100

collation-server=utf8mb4_unicode_ci
init_connect='SET NAMES utf8mb4'
default-time-zone='+8:00'

sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
```

## 重启 MySQL

```bash
sudo systemctl restart mysqld
```

## 设置开机启动

```bash
sudo systemctl enable mysqld
```

