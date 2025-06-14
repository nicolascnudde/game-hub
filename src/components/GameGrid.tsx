import { SimpleGrid, Text } from "@chakra-ui/react";

import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames from "@/hooks/useGames";
import { GameQuery } from "@/App";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const { data: games, isLoading, error } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return <Text>{error}</Text>;

	return (
		<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} rowGap={6} columnGap={6} padding="16px">
			{isLoading &&
				skeletons.map((skeleton) => (
					<GameCardContainer key={skeleton}>
						<GameCardSkeleton />
					</GameCardContainer>
				))}
			{games.map((game) => (
				<GameCardContainer key={game.id}>
					<GameCard game={game} />
				</GameCardContainer>
			))}
		</SimpleGrid>
	);
};

export default GameGrid;
