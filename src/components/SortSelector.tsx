import { Button, Menu } from "@chakra-ui/react";

const SortSelector = () => {
	return (
		<Menu.Root>
			<Menu.Trigger asChild>
				<Button variant="outline">Order by: Relevance</Button>
			</Menu.Trigger>

			<Menu.Positioner>
				<Menu.Content>
					<Menu.Item value="relevance">Relevance</Menu.Item>
					<Menu.Item value="popularity">Popularity</Menu.Item>
					<Menu.Item value="rating">Rating</Menu.Item>
					<Menu.Item value="release-date">Release Date</Menu.Item>
					<Menu.Item value="alphabetical">Alphabetical</Menu.Item>
					<Menu.Item value="price">Price</Menu.Item>
				</Menu.Content>
			</Menu.Positioner>
		</Menu.Root>
	);
};

export default SortSelector;
