"use client"

import React from 'react'
import {ConfigProvider, App as AntApp, theme as antdTheme} from 'antd'
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

export function UIProviders({children, locale = 'en'}: {children: React.ReactNode; locale?: 'en' | 'zh'}) {
  const [isDark, setIsDark] = React.useState(false)
  const algorithm = isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm
  const antdLocale = locale === 'zh' ? zhCN : enUS

  React.useEffect(() => {
    dayjs.locale(locale === 'zh' ? 'zh-cn' : 'en')
  }, [locale])

  return (
    <ConfigProvider theme={{algorithm, token: {colorPrimary: '#6f53ff'}}} locale={antdLocale}>
      <AntApp>{children}</AntApp>
    </ConfigProvider>
  )
}


