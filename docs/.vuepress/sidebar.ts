import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig([  
  {
    text: "macOS",
    prefix: "macos/",
    children: [
      '/macos/index.md',
      '/macos/config.md',
      '/macos/brew.md',
      '/macos/java.md',
      '/macos/nodejs.md',
      '/macos/mysql.md',
      '/macos/idea.md',
      '/macos/iterm2.md',
      '/macos/keys.md',
    ],
  },
  {
    text: "CentOS",
    prefix: "centos/",
    children: [
      '/centos/index.md',
      '/centos/os.md',
      '/centos/yum.md',
      '/centos/firewalld.md',
      '/centos/java.md',
      '/centos/docker-ce.md',
      '/centos/docker-compose.md',
      '/centos/redis.md',
      '/centos/nginx.md',
      '/centos/mysql8.md',
      '/centos/mysql57.md',
      '/centos/jenkins.md',
      '/centos/rabbitmq.md',
      '/centos/lets-encrypt.md',
      '/centos/frp.md',
    ],
  },
]);
