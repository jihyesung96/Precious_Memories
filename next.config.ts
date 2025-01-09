import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    domains: ["avatars.githubusercontent.com"], // 허용할 도메인 추가
  },
};

export default nextConfig;
