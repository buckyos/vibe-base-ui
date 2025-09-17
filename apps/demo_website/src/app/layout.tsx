import type { Metadata } from 'next'
import 'antd/dist/reset.css'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import '../i18n/request'

export const metadata: Metadata = {
  title: 'Vibe Base UI',
  description: 'Base UI library for Vibe coding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  )
}