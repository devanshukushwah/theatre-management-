export interface Show {
  id: number | null | undefined;
  startTime: string | null | undefined;
  endTime: string | null | undefined;
  duration: number | null | undefined;
  movie: number | null | undefined;
  totalSeats: number;
  bookedSeats: number;
}
