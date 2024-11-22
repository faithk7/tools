import { defineConfig } from 'vitepress'
// import './custom.css'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kai Qu's Tools",
  description: "A site that tracks the tools Kai is using",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        // text: "Intro",
        items: [
          { text: "About", link: "/intro" },
        ]
      },
      {
        text: 'Categories',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
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
