// import { withContentlayer } from 'next-contentlayer';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: [],
  },
};

export default nextConfig;
