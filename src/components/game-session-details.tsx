import { useState } from 'react';
import gameHistoryStyles from '../styles/GameHistory.module.css';
import { GameHistoryProps } from '../types/common';

const playerDetails = (name, ranking) => {
  return (
    <>
      <div className={gameHistoryStyles.playersRankings}>
        {ranking}. {name}
      </div>

      <br></br>
    </>
  );
};

export default function GameSessionDetails({
  gameSession,
}: {
  gameSession: GameHistoryProps;
}) {
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <>
      <div className={gameHistoryStyles.container}>
        <button
          className={gameHistoryStyles.showDetailsButton}
          onClick={() => setOpenDetails(!openDetails)}
        >
          <h5>
            <div className={gameHistoryStyles.gameSessionHeader}>
              <div className={gameHistoryStyles.gameSessionHeaderDate}>
                {gameSession.date}
              </div>
              <div className={gameHistoryStyles.gameSessionHeaderWinner}>
                Vinner av spillet: {gameSession.winner}
              </div>
            </div>
            {openDetails && (
              <div>
                {gameSession.sessionScores.map((playersRanking) => {
                  return playerDetails(
                    playersRanking.userId,
                    playersRanking.score
                  );
                })}
              </div>
            )}
            <hr></hr>
          </h5>
        </button>
      </div>
    </>
  );
}
