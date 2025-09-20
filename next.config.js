/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ["localhost", "avatar.iran.liara.run"],
  },
};

module.exports = nextConfig;
