import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import background from "@/assets/images/background.jpg";

export const metadata: Metadata = {
	title: "Maximiliano Otero portfolio",
	description: "Maximiliano Nicolas Otero Silvera portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<body className={`antialiased`}>
				<Image
					style={{ objectFit: "fill" }}
					className="z-0 fixed w-full h-full"
					src={background}
					alt=""
				/>
				<div className="z-10 relative">{children}</div>
			</body>
		</html>
	);
}
