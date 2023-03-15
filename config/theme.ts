const navEn = [
  { text: 'home', link: '/' },
  {
    text: 'article',
    items: [
      { text: 'frontend', link: '/catalogue/article-frontend' },
      { text: 'server', link: '/catalogue/article-service' },
      { text: 'tools', link: '/catalogue/article-utils' }
    ]
  }
]
const navZh = [
  { text: '首页', link: '/' },
  {
    text: '文章',
    items: [
      { text: '前端', link: '/catalogue/article-frontend' },
      { text: '服务端', link: '/catalogue/article-service' },
      { text: '环境工具', link: '/catalogue/article-utils' }
    ]
  }
]

export default function(lang) {
  return {
    logo: '/assets/favicon.ico',
    nav: lang === 'zh' ? navZh : navEn,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/webxmsj' },
      { icon: 'twitter', link: 'https://twitter.com/webxmsj' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present webxmsj'
    }
  } as unknown
}