# SpringBoot

## 介绍

Spring Boot 是 Pivotal 团队在 Spring 的基础上提供的一套全新的开源框架，其目的是为了简化 Spring 应用的搭建和开发过程。Spring Boot 去除了大量的 XML 配置文件，简化了复杂的依赖管理。

Spring Boot 具有 Spring 一切优秀特性，Spring 能做的事，Spring Boot 都可以做，而且使用更加简单，功能更加丰富，性能更加稳定而健壮。随着近些年来微服务技术的流行，Spring Boot 也成了时下炙手可热的技术。

Spring Boot 集成了大量常用的第三方库配置，Spring Boot 应用中这些第三方库几乎可以是零配置的开箱即用（out-of-the-box），大部分的 Spring Boot 应用都只需要非常少量的配置代码（基于 Java 的配置），开发者能够更加专注于业务逻辑。 

## 创建 SpringBoot 项目

使用 IDEA 创建项目

![image-20220320155038277](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203201550308.png)

输入项目名称、存储项目目录，GroupId, ArtifactId，包名等内容，点击下一步

![image-20220320155229564](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203201552587.png)

勾选 Spring Web ，点击 Finish

![image-20220320161749499](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203201617523.png)

项目结构

![image-20220320161905638](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203201619673.png)

## 启动 SpringBoot

Spring Boot 项目会创建一个名为 ***Application 的主程序启动类 ，该类中使用了一个组合注解 @SpringBootApplication，用来开启 Spring Boot 的自动配置，另外该启动类中包含一个 main() 方法，用来启动该项目。

直接运行启动类 HelloworldApplication 中的 main() 方法，便可以启动该项目

![image-20220320162317504](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203201623527.png)

运行结果

![image-20220320162230502](https://gitee.com/huuu5/image/raw/master/docs/2022/03/202203201622530.png)