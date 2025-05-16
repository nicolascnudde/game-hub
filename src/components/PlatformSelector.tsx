import { BsChevronDown } from "react-icons/bs";
import { Button, Menu, Spinner } from "@chakra-ui/react";

import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";

interface Props {
	selectedPlatform: Platform | null;
	onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
	const { data: platforms, isLoading, error } = usePlatforms();

	if (error) return null;

	return (
		<Menu.Root>
			<Menu.Trigger asChild>
				<Button variant="outline">
					{selectedPlatform?.name || "Platforms"}
					{isLoading ? <Spinner size="sm" /> : <BsChevronDown />}
				</Button>
			</Menu.Trigger>

			<Menu.Positioner>
				<Menu.Content>
					{platforms.map((platform) => (
						<Menu.Item key={platform.id} value={platform.slug} onClick={() => onSelectPlatform(platform)}>
							{platform.name}
						</Menu.Item>
					))}
				</Menu.Content>
			</Menu.Positioner>
		</Menu.Root>
	);
};

export default PlatformSelector;
