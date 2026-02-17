
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  // assetPrefix: isProd ? basePath : '',
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
    ],
  },
  env: {
    BASE_PATH: process.env.BASE_PATH,
  },
};

module.exports = nextConfig;
