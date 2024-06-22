/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
                port: "",
                pathname: "/**",
            },
        ],
    },
    redirects: async () => {
        return [
            {
                source: '/another',
                destination: '/posts',
                permanent: true,
            },
        ]
    }
};

export default nextConfig;
