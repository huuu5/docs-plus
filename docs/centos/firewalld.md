# 防火墙

## 查看防火墙状态

```bash
sudo systemctl status firewalld
```

![image-20220305193304370](https://gitee.com/mhxs5555/image/raw/master/blog/2022/03/202203051933401.png)

## 开启、重启、关闭 firewalld

```bash
# 开启
sudo systemctl start firewalld
# 关闭
sudo systemctl stop firewalld
# 重启
sudo systemctl restart firewalld
```

## 查看防火墙规则

```bash
sudo firewall-cmd --list-all 
```

## 查询、开放、关闭端口

```bash
# 查询端口是否开放
sudo firewall-cmd --query-port=80/tcp
# 开放80端口
sudo firewall-cmd --zone=public --permanent --add-port=80/tcp
# 移除端口
sudo firewall-cmd --zone=public --permanent --remove-port=80/tcp

#重启防火墙(修改配置后要重启防火墙)
sudo firewall-cmd --reload
```

## 参数说明

```
# 参数解释
1、firwall-cmd：是Linux提供的操作firewall的一个工具；
2、--zone：设置的区域
3、--permanent：表示设置为持久；
4、--add-port：标识添加的端口；
5、--remove-port：标识移除的端口
```