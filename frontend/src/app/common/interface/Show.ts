export interface Show {
  id: number | null | undefined;
  startTime: string | null | undefined;
  endTime: string | null | undefined;
  duration: number | null | undefined;
  movieId?: number | null | undefined;
  movieName: string | null | undefined;
  totalSeats: number;
  bookedSeats: number;
}
