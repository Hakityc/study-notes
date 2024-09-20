
import { generateNav, generateSidebar } from "../plugin/generateSidebar";

export const themeConfig = {
    logo: "/favicon.ico",
    siteTitle: "Tam Blog",
    nav: generateNav({
        basePath: 'TamDocs/',
        customOrder: ['导航', '前端开发']
    }),
    sidebar: generateSidebar({
        basePath: 'TamDocs/',
        filterIndexMd: true,
        filterEmptyDirs: true,
        excludePattern: ['WIP'],
        customOrder: new Map([
            ['前端开发', ['😋HTML', '👽Vue']],
            ['开发工具', ['npm','nvm']],
        ])
    }),
}