import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { Platform } from "@/hooks/useGames";

interface Props {
	platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		android: FaAndroid,
		apple: FaApple,
		ios: MdPhoneIphone,
		linux: FaLinux,
		mac: FaApple,
		nintendo: SiNintendo,
		pc: FaWindows,
		playstation: FaPlaystation,
		web: BsGlobe,
		xbox: FaXbox,
	};

	return (
		<HStack marginY={1}>
			{platforms.map((platform) => (
				<Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
			))}
		</HStack>
	);
};

export default PlatformIconList;
