export type OnClickFunction = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

type SessionScore = {
  userId: number;
  score: number;
};
export type GameHistoryProps = {
  date: string;
  winner: string;
  sessionScores: SessionScore[];
};

export type GameSessionData = {
  gameId: number;
  userSessionScores: SessionScore[];
};
