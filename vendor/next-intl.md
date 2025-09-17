# next-intl 集成说明

## 目录结构
- apps/demo_website/src/middleware.ts: 路由前缀与默认语言
- apps/demo_website/src/i18n/request.ts: 动态加载消息
- apps/demo_website/src/messages/{en,zh}.json: 语言包
- apps/demo_website/src/app/[locale]/layout.tsx: NextIntlClientProvider + UIProviders
- apps/demo_website/src/app/[locale]/providers.tsx: antd 与 Day.js locale 联动
- apps/demo_website/src/app/[locale]/page.tsx: 示例页面

## 使用方式
- 运行开发：
  ```bash
  cd apps/demo_website
  pnpm dev
  ```
- 访问：/en 或 /zh

## 新增语言
1. 新建 apps/demo_website/src/messages/{lang}.json
2. 在 middleware.ts 的 locales 中加入新语言代码
3. 在 i18n/request.ts 增加动态导入分支

## 注意事项
- App Router 顶层已在 apps/demo_website/src/app/layout.tsx 引入 i18n/request 以启用静态分析。
- 若需要持久化主题/语言选择，可在 providers.tsx 使用 localStorage，并在服务端通过 cookies 协同。
