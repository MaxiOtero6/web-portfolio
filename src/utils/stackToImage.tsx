import Image, { StaticImageData } from "next/image";
import missingTexture from "@/assets/images/missingTexture.png";

function stringToImage(item: string): StaticImageData {
	const image = item.trim().toLowerCase();

	try {
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		return require(`@/assets/images/${image}.png`).default;
	} catch {
		return missingTexture;
	}
}

export function StackToImage(item: string) {
	return (
		<Image
			className="h-[25px] w-[25px] min-h-[25px] min-w-[25px] lg:h-[40px] lg:w-[40px] md:h-[30px] md:w-[30px]"
			key={item}
			src={stringToImage(item)}
			alt={item}
			style={{ objectFit: "contain" }}
		/>
	);
}
