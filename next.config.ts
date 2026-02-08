import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  /* config options here */
};

module.exports = {
  output:'standalone',
  allowedDevOrigins: ["127.0.0.1", "localhost", "*.zetastart.link"],
}

export default nextConfig;
