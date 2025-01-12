import missingTexture from "@/assets/images/missingTexture.png";
import Image, { StaticImageData } from "next/image";
import cpp from "@/assets/images/cpp.png";
import rust from "@/assets/images/rust.png";
import typescript from "@/assets/images/typescript.png";
import java from "@/assets/images/java.png";
import python from "@/assets/images/python.png";
import nodejs from "@/assets/images/nodejs.png";
import reactIcon from "@/assets/images/react.png";
import expo from "@/assets/images/expo.png";
import express from "@/assets/images/express.png";
import fastapi from "@/assets/images/fastapi.png";
import nextjs from "@/assets/images/nextjs.png";
import postgresql from "@/assets/images/postgresql.png";
import mongodb from "@/assets/images/mongodb.png";

function stringToImage(item: string): StaticImageData {
	switch (item) {
		case "Python":
			return python;
		case "NodeJS":
			return nodejs;
		case "React":
			return reactIcon;
		case "Java":
			return java;
		case "Typescript":
			return typescript;
		case "Rust":
			return rust;
		case "C++":
			return cpp;
		case "Expo":
			return expo;
		case "Express":
			return express;
		case "FastAPI":
			return fastapi;
		case "NextJS":
			return nextjs;
		case "PostgreSQL":
			return postgresql;
		case "MongoDB":
			return mongodb;
		default:
			return missingTexture;
	}
}

export function StackToImage(item: string) {
	const image = stringToImage(item);

	return (
		<Image
			className="h-[25px] w-[25px] min-h-[25px] min-w-[25px] lg:h-[40px] lg:w-[40px] md:h-[30px] md:w-[30px]"
			key={item}
			src={image}
			alt={item}
			style={{ objectFit: "contain" }}
		/>
	);
}
