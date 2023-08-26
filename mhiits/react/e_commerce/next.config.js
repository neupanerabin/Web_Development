/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig
// module.exports = {
//     images: {
//       domains: ['icms-image.slatic.net'],
//     },
//   };
  
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'tailwindui.com',
          port: '',
          pathname: '/**',
        },
      ],
      unoptimized: true,
    },
  };