import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, Link, List, Spinner } from "@chakra-ui/react";

const GenreList = ({
	selectedGenre,
	onSelectGenre,
}: {
	selectedGenre: Genre | null;
	onSelectGenre: (genre: Genre) => void;
}) => {
	const { data: genres, isLoading, error } = useGenres();

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<List.Root listStyle={"none"}>
			{genres.map((genre) => (
				<List.Item key={genre.id} paddingBlock={"5px"}>
					<HStack>
						<Image src={getCroppedImageUrl(genre.image_background)} alt={genre.name} boxSize="32px" borderRadius={8} />

						<Link
							fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
							variant="underline"
							onClick={() => onSelectGenre(genre)}
						>
							{genre.name}
						</Link>
					</HStack>
				</List.Item>
			))}
		</List.Root>
	);
};

export default GenreList;
