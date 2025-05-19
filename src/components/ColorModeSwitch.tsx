import { HStack, Switch } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<HStack justifyContent="space-between" padding="10px">
			<Switch.Root checked={colorMode === "dark"} onCheckedChange={toggleColorMode}>
				<Switch.HiddenInput />

				<Switch.Control>
					<Switch.Thumb />
				</Switch.Control>

				<Switch.Label whiteSpace="nowrap">Dark Mode</Switch.Label>
			</Switch.Root>
		</HStack>
	);
};

export default ColorModeSwitch;
