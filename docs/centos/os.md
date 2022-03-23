# 系统安装

## 一. 下载centos 并制作安装U盘

下载地址 http://isoredirect.centos.org/centos/7/isos/x86_64/

使用 [balenaEtcher](https://www.balena.io/etcher/)  制作安装U盘

![image-20210409221415270](https://gitee.com/mhxs5555/image/raw/master/docs/2022/03/202203222104972.png)

## 二.安装

### 1.进入CentOS安装界面

![image-20210409215955595](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210409215955595.png)

### 2.设置语言

推荐使用 **English** ， 点击 **Continue**

![img](https://oscimg.oschina.net/oscnet/f9b5d475abb27e27934d91de1f8fdd33a4b.jpg![image-20210409212655039](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210409212655039.png)

### 3.设置时间和区域

点击 **DATE & TIME**

![image-20210409212853818](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210409212853818.png)

找到**Asia -- Shanghai** 并点击 -- **Done**

![img](https://oscimg.oschina.net/oscnet/f9b5d475abb27e27934d91de1f8fdd33a4b.jpg)

### 4.设置安装来源

默认即可

![image-20210409213012896](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210409213012896.png)



### 5.安装软件

选择 **Minimal Install** 或者 **Basic Web Server** ，并点击 **Done**

![image-20210409213043910](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210409213043910.png)

![image-20210409213108405](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210409213108405.png)

### 6.安装位置-即配置系统分区

(1) 点击 **Installation destination**

![image-20210409213142266](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210409213142266.png)



(2)下滑菜单找到**Other Storage Options--Partitioning**--**I will configure partitioning**选中 **I will configure partitioning** 自定义分区

点击 **Done**

![image-20210409213210674](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210409213210674.png)

(3) 选择 **Standard Partition** 标准分区 - 点击左下角 **+** 添加分区

![image-20210409213241247](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210409213241247.png)

(4) 分区

creat--Standard Partition--creat--mount point（挂载点）和File System Type（系统文件类型）

**分别创建/boot区、swap交换分区、根分区/**

注释：Linux系统最简单的分区方案：

1、分/boot区，给1024M，/boot放启动文件。

2、分交换分区（交换空间）swap，看内存总大小，如果内存足够大，这个空间就不需要设置太大。如果内存小于2G。那么这个空间设置成内存的2倍大小。

3、所有空间给/（根分区）

![image-20210409213304678](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210409213304678.png)



![image-20210409213330133](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210409213330133.png)

根目录可以不填写大小，会自动把剩下所有容量分配到该分区

![image-20210409213346394](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210409213346394.png)

(5) 分区完成， 点击 **Done**

![image-20210409213403372](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210409213403372.png)

点击 **Accept Changes** 进行分区

![image-20210409213423096](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210409213423096.png)

### 7.配置网络

（1）在 Host name 处设置主机名： （例如 CentOS7)

![image-20210409213443059](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210409213443059.png)

（2）打开网络， 点击 Configure 配置IP

![image-20210409213507040](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210409213507040.png)

（3）点击 **IPv4 Settings** , 选择 **Manual** 手动分配IP

![image-20210409213534282](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210409213534282.png)



![image-20210409213614854](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210409213614854.png)

### 8.配置root用户密码

![image-20210409215050639](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210409215050639.png)

![image-20210409220211995](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210409220211995.png)

### 9.安装完成，重启

### 10.关闭selinux

```bash
sudo vi /etc/selinux/config
```

![image-20210410122000503](https://gitee.com/mhxs5555/image/raw/master/blog/2021/04/image-20210410122000503.png)

**将 SELINUX=enforcing 改成 SELINUX=disabled**, **保存，重启服务器**

```bash
sudo reboot
```

