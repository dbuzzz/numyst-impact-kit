import type { NextConfig } from 'next';

const basePath = '/impactkit';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  // IMPORTANT for static export (Netlify manual upload)
  images: {
    unoptimized: true,
  },

  // This is REQUIRED for static hosting
  output: 'export',
  basePath,
  assetPrefix: `${basePath}/`,
  trailingSlash: true,

  transpilePackages: ['motion'],
};

export default nextConfig;