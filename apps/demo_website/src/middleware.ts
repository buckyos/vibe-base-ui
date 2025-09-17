import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  localePrefix: 'always'
})

export const config = {
  matcher: ['/((?!_next|.*\..*).*)']
}


