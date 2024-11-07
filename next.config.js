/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'qmcpvgbnuytnlyemcznj.supabase.co',
              port: '',
            },
          ],
    }
};
module.exports = nextConfig;
