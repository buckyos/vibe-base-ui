import {NextIntlClientProvider} from 'next-intl'
import {getMessages, getLocale} from 'next-intl/server'
import {UIProviders} from './providers'

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: 'en' | 'zh' }
}) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <UIProviders locale={params.locale}>
        {children}
      </UIProviders>
    </NextIntlClientProvider>
  )
}


