export interface Show {
  id?: number;
  startTime: string | null | undefined;
  endTime: string | null | undefined;
  duration: number | null | undefined;
  movieId?: number | null | undefined;
  movieName?: string | null | undefined;
  status?: string;
}
