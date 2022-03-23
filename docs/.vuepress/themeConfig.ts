import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://chenzhenhu.com",

  author: {
    name: "虎哥",
    url: "https://chenzhenhu.com",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  //repo: "https://gitee.com/mhxs5555/document.git",

  docsDir: "docs",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "",

  displayFooter: true,

  pageInfo: ["ReadingTime"],

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },
  lastUpdated: false,
  contributors: false,
  plugins: {
    blog: {
      autoExcerpt: true,
    },
    sitemap: {
      excludeUrls: ['/404.html']
    },

    // 你也可以使用 Waline
    comment: {
      type: 'waline',
      serverURL: 'https://waline-cnfz2tw4p-huuu5.vercel.app'
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
