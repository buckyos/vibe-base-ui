import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}