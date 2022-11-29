/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   loader: "akamai",
  //   path: "",
  // },
  images:{
    unoptimized:true,
  },
  // basePath: "/AppWorkSchool-intro",
  assetPrefix: ".",
  //會讓npm run dev 404
};

module.exports = nextConfig
//打包路徑問題