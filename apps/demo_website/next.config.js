import createNextIntlPlugin from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  transpilePackages: [
    '@vibe-base-ui/react',
    '@vibe-base-ui/design-tokens',
    '@vibe-base-ui/headless',
    '@vibe-base-ui/utils'
  ]
}

const withNextIntl = createNextIntlPlugin('./src/i18n.ts')

export default withNextIntl(nextConfig)