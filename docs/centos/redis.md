# 安装Redis

:::tip TIP
安装Redis版本为：**6.x.x**
:::

## 1. 安装准备

```bash
$ sudo yum -y install centos-release-scl
$ sudo yum -y install devtoolset-9-gcc devtoolset-9-gcc-c++ devtoolset-9-binutils
$ sudo scl enable devtoolset-9 bash
# 需要注意的是scl命令启用只是临时的，退出shell或重启就会恢复原系统gcc版本。
# 如果要长期使用gcc 9.3的话：
$ sudo echo -e "\nsource /opt/rh/devtoolset-9/enable" >>/etc/profile
```

## 2. 开始安装

```bash
# 下载安装包,无该目录请先创建 mkdir -p /opt/install
$ sudo cd /opt/install
$ sudo wget http://download.redis.io/releases/redis-6.2.1.tar.gz
# 解压包
$ sudo tar -zxvf redis-6.2.1.tar.gz
$ sudo cd redis-6.2.1

# 编译安装到指定目录下
$ sudo make PREFIX=/usr/local/redis install

# 编译出错时，清出编译生成的文件
$ sudo make distclean

# 建立软连接 
$ sudo ln -s /usr/local/reids/bin/* /usr/local/bin/
$ sudo ln -s /usr/local/redis/bin/* /usr/bin/

$ sudo mkdir /etc/redis
$ sudo cp redis.conf /etc/redis/6379.conf
$ sudo cd utils
$ sudo cp redis_init_script /etc/init.d/redis
$ sudo chmod 777 /etc/init.d/redis
```

## 3. 修改redis.conf

```bash
$ sudo vim /etc/redis/6379.conf
```

**修改以下内容**

```
bind 127.0.0.1 # 将这行代码注释，监听所有的ip地址，外网可以访问
protected-mode no # 把yes改成no，允许外网访问
daemonize yes # 把no改成yes，后台运行
# 可选项
appendonly yes # 开启aof备份
requirepass 12345 # 密码
```

## 4.设置开机启动

```bash
$ sudo cd /etc/init.d
# 1. 将redis服务添加到开机自启
$ sudo chkconfig --add redis
# 2. 设置redis开机自启
$ sudo chkconfig redis on
# 3. 查看redis 有没有设置为开机启动
$ sudo chkconfig --list | grep redis
```

## 5.启动Redis

```bash
# 启动Redis服务
$ sudo systemctl start redis
# 设置开机启动
$ sudo systemctl enable redis
```

## 6.连接Redis，设置key-value是否成功

```bash
$ sudo redis-cli
127.0.0.1:6379> set a a
OK
127.0.0.1:6379> get a
"a"
127.0.0.1:6379> quit
```

