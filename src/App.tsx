import { useState } from "react";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";

import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
}

const App = () => {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}
		>
			<GridItem area="nav">
				<NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
			</GridItem>
			<GridItem area="aside" display={{ base: "none", lg: "block" }} padding={"16px"}>
				<GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
			</GridItem>
			<GridItem area="main">
				<Box paddingInlineStart={4} paddingBlockStart={5}>
					<GameHeading gameQuery={gameQuery} />
					<Flex gap={4} marginBlockEnd={5}>
						<PlatformSelector
							selectedPlatform={gameQuery.platform}
							onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
						/>
						<SortSelector
							sortOrder={gameQuery.sortOrder}
							onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
						/>
					</Flex>
				</Box>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
};

export default App;
