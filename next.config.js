/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // 👇 ADD THIS
  output: 'export',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;