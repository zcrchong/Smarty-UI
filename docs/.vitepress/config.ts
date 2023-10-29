import {defineConfig} from 'vitepress'
import { demoBlockPlugin } from "vitepress-theme-demoblock";

const sidebar:any = {
    '/': [
        {
            text: '通用',
            items: [
                { text: 'Button 按钮', link: '/components/Button/' },
            ]
        },
    ]
}

export default defineConfig({
    title: "🔨  Smarty-UI",
    themeConfig: {
        sidebar
    },
    markdown: {
        config: (md) => {
            // 添加DemoBlock插槽
            md.use(demoBlockPlugin)
        }
    }
})