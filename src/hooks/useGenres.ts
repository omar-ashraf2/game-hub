import { Genre } from "../types/genre";
import useData from "./useData";

const useGenres = () => useData<Genre>("/genres");

export default useGenres;