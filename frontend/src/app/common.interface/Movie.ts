export interface Movie {
  id: number | null | undefined;
  duration: number | null | undefined;
  name: string | null | undefined;
  actors: string[] | null | undefined;
  director: string | null | undefined;
}
