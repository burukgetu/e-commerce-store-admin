/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "res.cloudinary.com"
        ]
    },
    webpack: (config, { dev }) => {
        // Modify the dev server to use polling in development mode
        if (dev) {
            config.watchOptions = {
                poll: 1000, // Check for changes every second
                aggregateTimeout: 300, // Delay before rebuilding
            };
        }
        return config;
    }
};

export default nextConfig;
