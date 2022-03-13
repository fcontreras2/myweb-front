const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  baseUrl: "src",
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    const imageLoaderRule = config.module.rules.find(rule => rule.loader == "next-image-loader")
    imageLoaderRule.exclude = /\.react\.svg$/

    return config;
  },
  images: {
    loader: "default",
    domains: ["localhost", "api.fcontreras2.com"],
  },
};

module.exports = nextConfig;
