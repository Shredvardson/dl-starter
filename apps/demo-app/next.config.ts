import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    turbopack: true,
  },
  transpilePackages: ['@ui', '@shared'],
};

export default nextConfig;