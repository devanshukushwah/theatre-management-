export interface Movie {
  id?: number;
  duration?: number | null | undefined;
  name: string | null | undefined;
  actors: string[];
  director?: string | null | undefined;
}
