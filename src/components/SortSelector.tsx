import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
	sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
	const sortOrders = [
		{
			value: "",
			label: "Relevance",
		},
		{
			value: "-added",
			label: "Date added",
		},
		{
			value: "name",
			label: "Name",
		},
		{
			value: "-released",
			label: "Release Date",
		},
		{
			value: "-metacritic",
			label: "Popularity",
		},
		{
			value: "-rating",
			label: "Average rating",
		},
	];

	const currentSortOrder = sortOrders.find((order) => order.value === sortOrder) || sortOrders[0];

	return (
		<Menu.Root>
			<Menu.Trigger asChild>
				<Button variant="outline">
					Order by: {currentSortOrder?.label || "Relevance"} <BsChevronDown />
				</Button>
			</Menu.Trigger>

			<Menu.Positioner>
				<Menu.Content>
					{sortOrders.map((order) => (
						<Menu.Item key={order.value} value={order.value} onClick={() => onSelectSortOrder(order.value)}>
							{order.label}
						</Menu.Item>
					))}
				</Menu.Content>
			</Menu.Positioner>
		</Menu.Root>
	);
};

export default SortSelector;
