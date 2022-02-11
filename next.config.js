/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "https://avatars.githubusercontent.com",
      "http://avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
