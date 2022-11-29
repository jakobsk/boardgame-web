import { BOARDGAME_API } from '../../constants/urls';

export async function getGameData(game) {
  //   const res = await fetch(`API_URL/games/${game}`);
  //   const gameData = await res.json();

  let gameData;

  switch (game) {
    case 'terraform':
      gameData = {
        rowData: [
          {
            name: 'Jakob Stenersen Kok',
            totalScore: 1500,
            gamesPlayed: 18,
            gamesWon: 8,
            gamesLost: 2,
          },
          {
            name: 'Vebjørn Nordahl Stadsvoll',
            totalScore: 1400,
            gamesPlayed: 18,
            gamesWon: 8,
            gamesLost: 2,
          },
          {
            name: 'Mathias Ackermann',
            totalScore: 1300,
            gamesPlayed: 18,
            gamesWon: 8,
            gamesLost: 2,
          },
          {
            name: 'Arvid Mildner',
            totalScore: 1300,
            gamesPlayed: 18,
            gamesWon: 8,
            gamesLost: 2,
          },
        ],

        gameHistory: [
          {
            date: '2021-10-01',
            winner: 'Jakob',
            playersRankings: [
              {
                name: 'Jakob',
                ranking: 1,
              },
              {
                name: 'Vebjørn',
                ranking: 2,
              },
              {
                name: 'Per',
                ranking: 3,
              },
              {
                name: 'Mahtias',
                ranking: 4,
              },
              {
                name: 'Arvid',
                ranking: 5,
              },
            ],
          },
          {
            date: '2021-10-02',
            winner: 'Jakob',
            playersRankings: [
              {
                name: 'Jakob',
                ranking: 1,
              },
              {
                name: 'Vebjørn',
                ranking: 2,
              },
              {
                name: 'Per',
                ranking: 3,
              },
              {
                name: 'Mahtias',
                ranking: 4,
              },
              {
                name: 'Arvid',
                ranking: 5,
              },
            ],
          },
          {
            date: '2021-10-03',
            winner: 'Jakob',
            playersRankings: [
              {
                name: 'Jakob',
                ranking: 1,
              },
              {
                name: 'Vebjørn',
                ranking: 2,
              },
              {
                name: 'Per',
                ranking: 3,
              },
              {
                name: 'Mahtias',
                ranking: 4,
              },
              {
                name: 'Arvid',
                ranking: 5,
              },
            ],
          },
        ],
      };

      break;

    case 'poker':
      gameData = {
        rowData: [
          {
            name: 'Jakob Stenersen Kok',
            totalScore: -23000,
            gamesPlayed: 18,
            gamesWon: 8,
            gamesLost: 2,
          },
          {
            name: 'Vebjørn Nordahl Stadsvoll',
            totalScore: 12000,
            gamesPlayed: 18,
            gamesWon: 8,
            gamesLost: 2,
          },
          {
            name: 'Mathias Ackermann',
            totalScore: -32000,
            gamesPlayed: 18,
            gamesWon: 8,
            gamesLost: 2,
          },
          {
            name: 'Arvid Mildner',
            totalScore: 2310,
            gamesPlayed: 18,
            gamesWon: 8,
            gamesLost: 2,
          },
        ],

        gameHistory: [
          {
            date: '2021-10-01',
            winner: 'Jakob',
            playersRankings: [
              {
                name: 'Jakob',
                ranking: -2350,
              },
              {
                name: 'Vebjørn',
                ranking: 2100,
              },
              {
                name: 'Per',
                ranking: 4800,
              },
              {
                name: 'Mahtias',
                ranking: -400,
              },
              {
                name: 'Arvid',
                ranking: 1120,
              },
            ],
          },
          {
            date: '2021-10-02',
            winner: 'Jakob',
            playersRankings: [
              {
                name: 'Jakob',
                ranking: -2350,
              },
              {
                name: 'Vebjørn',
                ranking: 2100,
              },
              {
                name: 'Per',
                ranking: 4800,
              },
              {
                name: 'Mahtias',
                ranking: -400,
              },
              {
                name: 'Arvid',
                ranking: 1120,
              },
            ],
          },
          {
            date: '2021-10-03',
            winner: 'Jakob',
            playersRankings: [
              {
                name: 'Jakob',
                ranking: -2350,
              },
              {
                name: 'Vebjørn',
                ranking: 2100,
              },
              {
                name: 'Per',
                ranking: 4800,
              },
              {
                name: 'Mahtias',
                ranking: -400,
              },
              {
                name: 'Arvid',
                ranking: 1120,
              },
            ],
          },
        ],
      };

      break;
  }
  return {
    game,
    ...gameData,
  };
}

export async function getAllGames() {
  const res = await fetch(`${BOARDGAME_API}/games`);
  const gameTypes = await res.json();

  return gameTypes.map((gameType) => {
    return {
      params: {
        game: gameType.slug,
        fullName: gameType.name,
      },
    };
  });
}
