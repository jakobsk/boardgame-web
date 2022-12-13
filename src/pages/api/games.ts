//const API_URL = 'localhost:8080/api';

import { BOARDGAME_API } from '../../constants/urls';
import { GameType } from '../../models/game-type';
import { GameSessionData } from '../../types/common';

export async function getTotalScores(game) {
  const res = await fetch(`${BOARDGAME_API}/games/${game}/score`);
  return res.json();
}

export async function getGameHistory(gameId) {
  const res = await fetch(`${BOARDGAME_API}/gamesessions/history/${gameId}`);
  return res.json();
}

export async function getAllGamesTypes(): Promise<GameType[]> {
  const res = await fetch(`${BOARDGAME_API}/games`);
  return res.json();
}

export async function registerGame(gameSessionData: GameSessionData) {
  const res = await fetch(`${BOARDGAME_API}/gamesessions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(gameSessionData),
  });
  return res.json();
}
