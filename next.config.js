/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_LOCAL_API_URL: process.env.NEXT_LOCAL_API_URL,
    MAPBOX_API_TOKEN: process.env.MAPBOX_API_TOKEN,
    OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY
  },
  // async rewrites() {
  //   if (process.env.NEXT_LOCAL_API_URL) {
  //     return [
  //       {
  //         source: process.env.NEXT_LOCAL_API_URL + '/:path*',
  //         destination: process.env.NEXT_PUBLIC_API_URL + '/:path*',
  //       },
  //     ]
  //   }
  //   return []
  // },
}

module.exports = nextConfig
