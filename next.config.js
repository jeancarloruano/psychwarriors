/** @type {import('next').NextConfig} */
const repo = "psychwarriors";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  basePath: process.env.GITHUB_PAGES ? `/${repo}` : "",
  assetPrefix: process.env.GITHUB_PAGES ? `/${repo}/` : "",
};

module.exports = nextConfig;
