//const API_URL = 'localhost:8080/api';

import { BOARDGAME_API } from '../../constants/urls';
import { GameType } from '../../models/game-type';

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
