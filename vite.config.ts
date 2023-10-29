// @ts-ignore
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import { presetUno, presetAttributify, presetIcons } from "unocss";
// import Unocss from "unocss/vite";
import Unocss from "./config/unocss";

const rollupOptions = {

    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "Vue",
        },
    },
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // 添加JSX插件
        vueJsx({
            // options are passed on to @vue/babel-plugin-jsx
        }),
        // 添加UnoCSS插件
        // Unocss({
        //     presets: [presetUno(), presetAttributify(), presetIcons()],
        // })
        Unocss(),
    ],
    build: {
        rollupOptions,
        minify: 'terser', // boolean | 'terser' | 'esbuild'
        sourcemap: true, // 输出单独 source文件
        brotliSize: true,  // 生成压缩大小报告
        cssCodeSplit: true,
        lib: {
            entry: "./src/entry.ts",
            name: "SmartyUI",
            fileName: "smarty-ui",
            formats: ["esm", "umd", "iife"], // 导出模块类型
        },
    },
    test: {
        // enable jest-like global test APIs
        globals: true,
        // 用于提供测试所需要的 Dom 仿真
        environment: 'happy-dom',
        // 支持tsx组件，很关键
        transformMode: {
            web: [/.[tj]sx$/]
        }
    }
});


