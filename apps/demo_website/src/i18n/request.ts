import {getRequestConfig} from 'next-intl/server'

export default getRequestConfig(async ({locale}) => ({
  messages:
    locale === 'zh'
      ? ((await import('../messages/zh.json')).default)
      : ((await import('../messages/en.json')).default)
}))


