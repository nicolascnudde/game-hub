import { Game } from "@/hooks/useGames";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";

import getCroppedImageUrl from "@/services/image-url";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card.Root width="300px" borderRadius={10} overflow="hidden">
			<Image width="100%" height="200px" objectFit="cover" src={getCroppedImageUrl(game.background_image)} />

			<Card.Body>
				<Heading fontSize="2xl">{game.name}</Heading>

				<HStack justifyContent="space-between">
					<PlatformIconList platforms={game.parent_platforms.map((platform) => platform.platform)} />
					<CriticScore score={game.metacritic} />
				</HStack>
			</Card.Body>
		</Card.Root>
	);
};

export default GameCard;
