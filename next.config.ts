import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	// basePath: "/web-portfolio",
	output: "export",
	reactStrictMode: true,
	images: { unoptimized: true },
	distDir: "dist",
};

export default nextConfig;
