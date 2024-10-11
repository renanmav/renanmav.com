/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/blog/api/views/*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "Accept, Accept-Version, Content-Length, Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
