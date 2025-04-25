import { Grid, GridItem } from "@chakra-ui/react";

const App = () => {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
		>
			<GridItem area="nav">Nav</GridItem>
			<GridItem area="aside" display={{ base: "none", lg: "block" }}>
				Aside
			</GridItem>
			<GridItem area="main">Main</GridItem>
		</Grid>
	);
};

export default App;
