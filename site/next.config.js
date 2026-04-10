/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'LathanAspa Kasm Workspaces',
    description: 'The LathanAspa store for Kasm supported workspaces. Not for Public Use',
    icon: '/img/logo.svg',
    listUrl: 'https://lathanaspa.github.io/kasm-registry/',
    contactUrl: 'https://lathanaspa.github.io/kasm-registry/',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
