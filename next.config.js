/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Get rid of all path restriction for Next Image
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  env: {
    BASE_API: "https://651e632a44a3a8aa47683e55.mockapi.io",
  },
};

module.exports = nextConfig;
