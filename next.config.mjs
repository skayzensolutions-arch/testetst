/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    qualities: [75, 85, 95],
  },
  // Ensure consistent URLs without trailing slashes
  trailingSlash: false,
}

export default nextConfig
