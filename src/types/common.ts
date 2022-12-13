export type OnClickFunction = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

type SessionScore = {
  name: string;
  score: number;
};
export type GameHistoryProps = {
  date: string;
  winner: string;
  sessionScores: SessionScore[];
};
