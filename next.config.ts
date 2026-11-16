import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: ['192.168.1.75'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.aesop.ca', // замените на домен ваших картинок
      },
    ],
  },
};

export default nextConfig;
