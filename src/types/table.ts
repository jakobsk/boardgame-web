import { Trend } from '../constants/table';

export interface RowData {
  name: string;
  rating: number;
  gamesPlayed: number;
  gamesWon: number;
  gamesLost: number;
  lastFiveGames: Trend;
}
