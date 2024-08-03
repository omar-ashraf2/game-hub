export interface Genre {
  id: number;
  name: string;
  slug: string;
}
export interface FetchGenresResponse {
  count: number;
  results: Genre[];
}
