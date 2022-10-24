/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  NETLIFY_NEXT_PLUGIN_SKIP: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
