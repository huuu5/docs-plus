import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  base: "/",

  dest: "./dist",
  port: 5001,
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'keyword', content: 'java,macos,centos' }],
    ['meta', { name: 'baidu-site-verification', content: 'code-YjTEAdmcww' }],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "虎哥",
      description: "日常开发技术积累",
    },
  },
  themeConfig,
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-V8VTYHBSB7',
      },
    ],
    [
      "vuepress-plugin-china-search-console", 
      {
        baiduId: '4235982182d6a33976652d6af8ea9560'
      }
    ],
  ]
});
