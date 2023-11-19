/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "treepz.s3.us-east-1.amazonaws.com",
            },
        ],
        // domains: [
        //     "treepz.s3.us-east-1.amazonaws.com"
        // ],
    },
}

module.exports = nextConfig
