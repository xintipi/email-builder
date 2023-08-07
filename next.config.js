/** @type {import('next').NextConfig} */
const dev = process.env.NODE_ENV !== 'production'

const nextAuthUrl = dev ? 'http://localhost:3000' : 'https://cms.ipes.edu.vn'
const nextPublicApiUrl = dev ? 'http://localhost:3000/api' : 'https://cms.ipes.edu.vn/api'

const nextConfig = {
  env: {
    NEXTAUTH_URL: nextAuthUrl,
    NEXTAUTH_SECRET: 'c74e4c2cd227e4e438e2ef57db064c56',

    NEXT_PUBLIC_API_URL: nextPublicApiUrl,
  },
}

module.exports = nextConfig
