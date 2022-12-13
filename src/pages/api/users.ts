import { BOARDGAME_API } from '../../constants/urls';

export async function getUsers() {
  const res = await fetch(`${BOARDGAME_API}/users`);
  return res.json();
}
