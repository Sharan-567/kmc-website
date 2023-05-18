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
  },
  assetPrefix: "./",

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://demo.metahos.com/api/:path*",
        has: [
          {
            type: "header",
            key: "Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
