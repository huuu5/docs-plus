import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/",
  {
    text: 'macOS',
    link: '/macos/',
    activeMatch: '^/macos/'
  },
  
  {
    text: '服务器',
    children: [
      {
        text: 'CentOS',
        link: '/centos/'
      }
    ]
  },
]);
