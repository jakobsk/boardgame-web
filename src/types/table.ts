import { Trend } from '../constants/table';

export interface RowDataTerraform {
  name: string;
  rating: number;
  gamesPlayed: number;
  gamesWon: number;
  gamesLost: number;
  lastFiveGames: Trend;
}

export interface RowDataPoker {
  name: string;
  netProfit: number;
  gamesPlayed: number;
  lastFiveGames: Trend;
}
