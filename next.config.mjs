/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Replace with your image domain
        port: '',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
