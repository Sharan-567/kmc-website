/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/teleopdassets/**",
      },
    ],
    // loader: "akamai",
    // path: "",
  },
  assetPrefix: "./",
};

export default nextConfig;
