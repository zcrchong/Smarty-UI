import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const colors = [
    "white",
    "black",
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
];
const safelist = [
    ...colors.map((v) => `bg-${v}-100`),
    ...colors.map((v) => `bg-${v}-400`),
    ...colors.map((v) => `bg-${v}-500`),
    ...colors.map((v) => `hover:bg-${v}-100`),
    ...colors.map((v) => `hover:bg-${v}-300`),
    ...colors.map((v) => `hover:bg-${v}-400`),
    ...colors.map((v) => `hover:bg-${v}-500`),
    ...colors.map((v) => `border-${v}-400`),
    ...colors.map((v) => `border-${v}-500`),
    ...colors.map((v) => `text-${v}-500`),
    ...colors.map((v) => `hover:text-${v}-500`),
    'text-white',
    // @ts-ignore
    ...Array.from({ length: 8 }, (_, i) => `px-${i + 1}`),
    // @ts-ignore
    ...Array.from({ length: 8 }, (_, i) => `py-${i + 1}`),
    ...["xs", "sm", "base", "lg", "xl", "2xl", "3xl"].map((v) => `text-${v}`),
    ...["rounded-full", "rounded-lg"],
    // 需要将使用的图标名加入到 safelist 中。
    ...[
        "search",
        "edit",
        "check",
        "message",
        "star-off",
        "delete",
        "add",
        "share",
    ].map((v) => `i-ic-baseline-${v}`),
];

export default () =>
    Unocss({
        safelist,
        // 添加图标预设 presetIcons
        presets: [presetUno(), presetAttributify(), presetIcons()],
    });