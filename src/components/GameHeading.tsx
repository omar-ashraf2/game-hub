import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../types/game-query";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name ?? ""} ${
    gameQuery.genre?.name ?? ""
  } ${gameQuery.searchText || ""} Games`;
  return (
    <Heading paddingLeft={2} marginY={5} as="h1" fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
