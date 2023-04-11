import { withContentlayer } from 'next-contentlayer';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['shiki'],
  },
};

export default withContentlayer(nextConfig);
// TODO: configure headers: https://github.com/leerob/leerob.io/blob/532e402af3bd1777ee1575a249a91f5d27f0c723/next.config.js#L38
