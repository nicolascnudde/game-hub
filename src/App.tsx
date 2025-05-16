import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";

const App = () => {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

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
				<NavBar />
			</GridItem>
			<GridItem area="aside" display={{ base: "none", lg: "block" }} padding={"16px"}>
				<GenreList selectedGenre={selectedGenre} onSelectGenre={setSelectedGenre} />
			</GridItem>
			<GridItem area="main">
				<PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={setSelectedPlatform} />
				<GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
			</GridItem>
		</Grid>
	);
};

export default App;
