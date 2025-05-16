import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Spinner } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
	const { data: platforms, isLoading, error } = usePlatforms();

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<Menu.Root>
			<Menu.Trigger asChild>
				<Button variant="outline">
					Platforms
					<BsChevronDown />
				</Button>
			</Menu.Trigger>

			<Menu.Positioner>
				<Menu.Content>
					{platforms.map((platform) => (
						<Menu.Item key={platform.id} value={platform.slug}>
							{platform.name}
						</Menu.Item>
					))}
				</Menu.Content>
			</Menu.Positioner>
		</Menu.Root>
	);
};

export default PlatformSelector;
