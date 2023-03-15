import { DefaultTheme, defineConfig, LocaleConfig } from 'vitepress'
import themeConfig from '../config/theme'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "webxmsj's blog",
  description: "Become a front-end developer",
  base: '/blog/',
  lastUpdated: true,
  locales: {
    root: {
      label: '中文',
      lang: 'zh',
      dir: 'zh',
      themeConfig: themeConfig('zh') as LocaleConfig<DefaultTheme.Config>,
    },
    en: {
      label: 'English',
      lang: 'en',
      dir: 'en',
      themeConfig: themeConfig('en') as LocaleConfig<DefaultTheme.Config>
    }
  },
  srcDir: './src',
  outDir: './dist',
  srcExclude: ['**/README.md', '**/TODO.md']
})
