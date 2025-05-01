
/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === "production";
// const basePath = '/painthilltemp';

const nextConfig = {
   basePath: isProd ? '' : '',
  // assetPrefix: isProd ? basePath : '',
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    BASE_PATH: process.env.BASE_PATH,
  },
};

module.exports = nextConfig;
