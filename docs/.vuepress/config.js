module.exports = {
  // site config
  lang: 'zh-CN',
  title: '虎哥',
  description: '日常开发技术积累',
  markdown: {
    code:{
      lineNumbers: 4
    }
      
  },
  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo.svg',
    lastUpdated: false,
    contributors: false,
    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
      [
        "script",
        {
          async: true,
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5102445394066813',
          crossorigin: 'anonymous'
        }
      ],
    ],
    
    navbar: [
      { text: '首页', link: '/', activeMatch: '^/$|^/home/' },
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
      {
        text: 'VitePress',
        link: '/vitepress/',
        activeMatch: '^/vitepress/'
      },
    ],
    sidebar: {
      '/centos/': [
        { 
          text: 'CentOS',
          children: [
            {text: '开始', link: '/centos/'},
            {text: '系统安装', link: '/centos/os'},
            {text: 'Yum', link: '/centos/yum'},
            {text: '防火墙', link: '/centos/firewalld'},
            {text: '安装 Java', link: '/centos/java'},
            {text: '安装 docker-ce', link: '/centos/docker-ce'},
            {text: '安装 docker-compose', link: '/centos/docker-compose'},
            {text: '安装 Redis', link: '/centos/redis'},
            {text: '安装 Nginx', link: '/centos/nginx'},
            {text: '安装 MySQL8', link: '/centos/mysql8'},
            {text: '安装 MySQL5.7', link: '/centos/mysql57'},
            {text: '安装 Jenkins', link: '/centos/jenkins'},
            {text: 'Let\'s Encrypt免费泛域名证书', link: '/centos/lets-encrypt'},
            {text: 'FRP 内网穿透', link: '/centos/frp'},
          ]
        }
      ],
      '/macos/': [
        {
          text: 'macOS',
          children: [
            {text: '开始', link: '/macos/'},
            {text: '配置', link: '/macos/config'},
            {text: 'Homebrew', link: '/macos/brew'},
            {text: 'Java', link: '/macos/java'},
            {text: 'NodeJS', link: '/macos/nodejs'},
            {text: 'MySQL', link: '/macos/mysql'},
            {text: 'IDEA', link: '/macos/idea'},
            {text: 'iterm2', link: '/macos/iterm2'},

          ]
        }
      ],
      '/vitepress/': [
        {
          text: 'VitePress',
          children: [
            {text: '开始', link: '/vitepress/'},
            {text: '集成 Algolia', link: '/vitepress/algolia'},
          ]
        }
      ]
    }
  },
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-V8VTYHBSB7',
      },
    ],
    [
      '@vuepress/docsearch',
      {
        appId: '',
        apiKey: '',
        indexName: '',
        locales: {
          '/': {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
              },
            },
          },
        },
      },
    ],
    [
      'vuepress-plugin-sitemap2',
      {
        hostname: 'https://chenzhenhu.com',
        excludeUrls: ['/404.html']
      }
    ],
    [
      "vuepress-plugin-china-search-console", 
      {
        baiduId: '4235982182d6a33976652d6af8ea9560'
      }
    ]
  ],
}