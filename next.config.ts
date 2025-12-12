import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack: {},
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,

  
  


  webpack: (config, ctx) => {
    if (ctx.dev) {
      config.watchOptions = {
        ignored: ["**/*"],
      };
    }
    return config;
  },
};

export default nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },

//   reactStrictMode: false,

//   // keep your custom webpack config
//   webpack: (config, { dev }) => {
//     if (dev) {
//       config.watchOptions = {
//         ignored: ["**/*"],
//       };
//     }
//     return config;
//   },
// };

// export default nextConfig;
