import {getRequestConfig} from 'next-intl/server'

const supportedLocales = ['en', 'zh'] as const

export default getRequestConfig(async ({locale}) => {
  //const locale = 'en'
  if (!supportedLocales.includes(locale as (typeof supportedLocales)[number])) {
    return {notFound: true}
  }

  const messagesModule = await import(`./messages/${locale}.json`)

  return {
    messages: messagesModule.default
  }
})


