/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
    experimental: {
        appDir: true,
      },
      env: { 
        url:'http://127.0.0.1:8090',
        userName:'ben@benblumdev.com', 
        passWord: 'kp6!c7JQ!d$aeA3F'

      },
}

module.exports = nextConfig