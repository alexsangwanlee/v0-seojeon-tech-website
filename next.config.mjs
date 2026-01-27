/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel 배포 시 이미지 최적화 활성화
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },
}

export default nextConfig