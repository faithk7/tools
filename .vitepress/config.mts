import { defineConfig } from 'vitepress'
// import './custom.css'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/tools/',
  title: "K7's Tools",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: 'Categories',
        items: [
          { text: 'Mac', link: '/mac' },
          { text: 'Chrome Extensions', link: '/chrome-extensions' },
          { text: 'Efficiency', link: '/efficiency' },
        ]
      },

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/faithk7/tools' }
    ]
  }
})
