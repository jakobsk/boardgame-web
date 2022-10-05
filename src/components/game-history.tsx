import gameHistoryStyles from '../styles/GameHistory.module.css';
import { GameHistoryProps } from '../types/common';
import GameSessionDetails from './game-session-details';

// TODO: fetch GameSessionsDetails from backend
export default function GameHistory({
  gameHistory,
}: {
  gameHistory: GameHistoryProps[];
}) {
  return (
    <>
      <h1 className={gameHistoryStyles.heading}>Historikk</h1>
      <div>
        {gameHistory.map((gameSession, index) => {
          return (
            <GameSessionDetails
              key={index}
              gameSession={gameSession}
            ></GameSessionDetails>
          );
        })}
      </div>
    </>
  );
}
