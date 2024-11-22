import DefaultTheme from 'vitepress/theme'
import ToolItem from '../../src/components/ToolItem.vue'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('ToolItem', ToolItem)
    }
}