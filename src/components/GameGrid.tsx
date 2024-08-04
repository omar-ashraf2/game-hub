import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameQuery } from "../types/game-query";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletonKeys = Array(6)
    .fill(0)
    .map((_, i) => `skeleton-${i}`);

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading &&
        skeletonKeys.map((key) => (
          <GameCardContainer key={key}>
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
