# 集成 Algolia

## 介绍

`Algolia` 是一个数据库实时搜索服务，能够提供毫秒级的数据库搜索服务，并且其服务能以 API 的形式方便地布局到网页、客户端、APP 等多种场景。

![image-20220310214317066](https://gitee.com/huuu5/image/raw/master/docs/2022-03/202203102143122.png)

## 准备工作

1. 在[官网](https://www.algolia.com)申请账号，填写你的邮箱和密码进行注册，或者使用 `Github` 和 `Google` 账号进行登陆, 根据步骤一步一步填写信息。

![image-20220310214523163](https://gitee.com/huuu5/image/raw/master/docs/2022-03/202203102145226.png)

2. 填写基本信息，红框内可以修改所在地区

![image-20220310215543611](https://gitee.com/huuu5/image/raw/master/docs/2022-03/202203102155672.png)

3. 完成后会发送一封确认邮件给你，登陆你的邮箱点击确认

![image-20220310215852161](https://gitee.com/huuu5/image/raw/master/docs/2022-03/202203102158217.png)

![image-20220310220209273](https://gitee.com/huuu5/image/raw/master/docs/2022-03/202203102202344.png)

4. 配置索引，使用默认选择，点击 continue 下一步

![image-20220310220426332](https://gitee.com/huuu5/image/raw/master/docs/2022-03/202203102213847.png)

5. 选择你用哪种开发语言发生数据，比如我选择 JavaScript，点击 continue 下一步

![image-20220310220533516](https://gitee.com/huuu5/image/raw/master/docs/2022-03/202203102205567.png)

6. Algolia 会默认给你创建一个 Application -> unamed application, 在红框内填写你的索引名称， 点击 Create index

![image-20220310220815552](https://gitee.com/huuu5/image/raw/master/docs/2022-03/202203102208629.png)

7. 点击左下角的设置按钮

![image-20220310221029029](https://gitee.com/huuu5/image/raw/master/docs/2022-03/202203102210107.png)



8. 点击 `Applications` 可以修改` Appliation` 信息，点击 `API keys` 可以查询 API 密钥信息

![image-20220310221127995](https://gitee.com/huuu5/image/raw/master/docs/2022-03/202203102211058.png)

![image-20220310221624503](https://gitee.com/huuu5/image/raw/master/docs/2022-03/202203102216562.png)

`Application ID` 是应用程序ID，`Search-Only API Key` 只能用来调用搜索API，`Admin API Key` 不仅可以调用搜索API，还可以创建，更新，删除索引

![image-20220310221454020](https://gitee.com/huuu5/image/raw/master/docs/2022-03/202203102214108.png)





## 配置

打开 `.vitepress` 目录下的 `config.js` 复制上面得到的 `Application ID` `Search-Only API KEY ` `索引名称` 粘贴到下面的配置里，编译上传到服务器

```js
module.exports = {
  themeConfig: {
    algolia: {
      apiId: 'your_api_id',
      apiKey: 'your_search_only_api_key',
      indexName: 'index_name'
    }
  }
}
```



## 上传数据

1. 创建 `.env` 文件, 复制你的 `Application ID` 和` Admin Key` 并保存

```
APPLICATION_ID=YOUR_APP_ID
API_KEY=YOUR_API_KEY
```

2. 创建 `config.json` 文件，复制下面json数据

```json
{
  "index_name": "你的索引名称",
  "start_urls": ["你的网站地址"],
  "selectors": {
    "lvl0": "",
    "lvl1": ".content  h1",
    "lvl2": ".content  h2",
    "lvl3": ".content  h3",
    "lvl4": ".content  h4",
    "lvl5": ".content  h5",
    "content": ".content p, .content li"
  }
}
```

3. [安装 jq，一个轻量级的命令行 JSON 处理器](https://github.com/stedolan/jq/wiki/Installation)

4. 使用 Docker 镜像上传数据

   

   ```bash
   docker run -it --env-file=/path/to/your/.env -e "CONFIG=$(cat /path/to/your/config.json | jq -r tostring)" algolia/docsearch-scraper
   ```

   

5. 打开网站点击搜索，搜索数据。

![image-20220311091724551](https://gitee.com/huuu5/image/raw/master/docs/2022-03/202203110917677.png)
