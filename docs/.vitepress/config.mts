import { defineConfig } from 'vitepress'



// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Win Setup Guide",
  description: "教你如何正确的入手一台新电脑",
  lang: 'zh-Hans',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['meta', { name: 'theme-color', content: '#6b68ff' }],
  ],
  themeConfig: {
    // nav: nav(),
    // sidebar: sidebar(),
    externalLinkIcon: true,
    langMenuLabel: '切换语言',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    outline: { level: [2, 3], label: '目录' },
    returnToTopLabel: '返回顶部',
    lastUpdated: { text: '更新于' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    logo: "img/favicon.ico",
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about/Site' },
      { text: "云盘", link: 'https://cloud.zhuns.top/' },
      { text: '博客', link: 'https://www.zhuns.top/' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: "关闭",
            },
          },
        },
      },
    },

    sidebar: [
      {
        text: '关于我们',
        items: [
          { text: '关于本站', link: '/about/Site' },
          { text: '关于作者', link: '/about/me' }
        ]
      },
      {
        text: "实用教程",
        items: [
          { text: '开箱验机', link: '/initall/tutorial/Unboxing' },
          {
            text: "演示页面",
            collapsed: false,
            items: [
              { text: "演示页面A", link: "/initall/demo/a" },
              { text: "演示页面B", link: "/initall/demo/b" },
              { text: "演示页面C", link: "/initall/demo/c" },
              { text: "演示页面D", link: "/initall/demo/d" },
              { text: "演示页面E", link: "/initall/demo/e" },
              { text: "演示页面F", link: "/initall/demo/f" },
              { text: "演示页面G", link: "/initall/demo/g" },

            ],
          },
        ]
      }
    ],
    footer: {
      message: '<div class="anei"><a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer"><img src="/img/icp.png">陕ICP备2023007133号-2</a></div><div class="anei"><a href="https://beian.mps.gov.cn/#/query/webSearch?code=51011502000812" rel="noreferrer" target="_blank"><img src="/img/anei.png">川公网安备51011502000812</a></div>',
      copyright: `COPYRIGHT © ${new Date().getFullYear()} Win Setup Guide`
    },

    socialLinks: [
      // { icon: 'github', link: '#' },
      {
        icon: {
          svg: '<svg t="1731332826199" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4665" width="200" height="200"><path d="M992.896 624.448c0-133.824-131.008-242.368-292.608-242.368-161.6 0-292.608 108.48-292.608 242.368 0 133.952 131.008 242.432 292.608 242.432 37.376 0 73.024-6.016 105.792-16.576l92.224 50.496-24.32-81.344c0.32-0.192 0.704-0.32 1.024-0.512C946.56 774.656 992.896 704.064 992.896 624.448zM594.624 578.688c-21.696 0-39.168-17.6-39.168-39.168 0-21.632 17.472-39.168 39.168-39.168 21.568 0 39.104 17.536 39.104 39.168C633.728 561.088 616.192 578.688 594.624 578.688zM792.64 578.688c-21.632 0-39.104-17.6-39.104-39.168 0-21.632 17.472-39.168 39.104-39.168s39.168 17.536 39.168 39.168C831.808 561.088 814.272 578.688 792.64 578.688z" fill="#7F7F7F" p-id="4666"></path><path d="M689.984 371.904c4.608 0 9.216 0.064 13.696 0.256-18.304-139.968-161.408-248.96-335.232-248.96-186.24 0-337.28 125.12-337.28 279.36 0 91.776 53.376 173.184 135.872 224.128 0.384 0.192 0.768 0.384 1.152 0.64l-27.968 93.76 106.24-58.24c37.888 12.16 78.912 19.072 121.984 19.072 13.504 0 26.816-0.704 39.936-2.048-7.04-20.8-10.944-42.816-10.944-65.536C397.376 480.384 528.448 371.904 689.984 371.904zM490.24 259.456c24.896 0 45.12 20.224 45.12 45.184 0 24.896-20.224 45.12-45.12 45.12-24.96 0-45.184-20.224-45.184-45.12C445.12 279.68 465.344 259.456 490.24 259.456zM261.952 349.76c-24.896 0-45.12-20.224-45.12-45.12 0-24.96 20.16-45.184 45.12-45.184 24.96 0 45.184 20.224 45.184 45.184C307.136 329.536 286.912 349.76 261.952 349.76z" fill="#7F7F7F" p-id="4667"></path></svg>'
        },
        link: "https://ypy.zhuns.top/2024/05/13/66417c79bacee.png",
      },
    ]
  }
})

