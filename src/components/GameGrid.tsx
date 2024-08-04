import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { Genre } from "../types/genre";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import { Platform } from "../types/platform";
interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(selectedGenre, selectedPlatform);

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          Array(6)
            .fill(0)
            .map((_, i) => (
              <GameCardContainer key={i}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
      {error && <Text>{error}</Text>}
    </>
  );
};

export default GameGrid;
