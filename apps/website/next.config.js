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

export default nextConfig