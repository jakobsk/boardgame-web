export type OnClickFunction = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

type PlayerRanking = {
  name: string;
  ranking: number;
};
export type GameHistoryProps = {
  date: string;
  winner: string;
  playersRankings: PlayerRanking[];
};
