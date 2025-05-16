import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, Text } from "@chakra-ui/react";

const GenreList = () => {
	const { data: genres } = useGenres();

	return (
		<List.Root listStyle={"none"}>
			{genres.map((genre) => (
				<List.Item key={genre.id} paddingBlock={"5px"}>
					<HStack>
						<Image src={getCroppedImageUrl(genre.image_background)} alt={genre.name} boxSize="32px" borderRadius={8} />

						<Text fontSize="lg">{genre.name}</Text>
					</HStack>
				</List.Item>
			))}
		</List.Root>
	);
};

export default GenreList;
