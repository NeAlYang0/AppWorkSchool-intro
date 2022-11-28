/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/AppWorkSchool-intro",
  assetPrefix: "/AppWorkSchool-intro",
  //會讓npm run dev 404
};

module.exports = nextConfig
