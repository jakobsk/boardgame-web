import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import Modal from '../../components/register-game-modal';
import RankingTable from '../../components/table';
import { RowData } from '../../types/table';
import { Trend } from '../../constants/table';
import GameHistory from '../../components/game-history';

// TODO: foldername should be changed to games and the specific game
// should be dynamically routed
const Terraform: NextPage = () => {
  const imageDto = {
    path: '/images/terraform.png',
    height: 427,
    width: 614,
  };

  // TODO: this should be fetched from the backend

  const rowData: RowData[] = [
    {
      name: 'Jakob Stenersen Kok',
      rating: 1500,
      gamesPlayed: 18,
      gamesWon: 8,
      gamesLost: 2,
      lastFiveGames: Trend.UP,
    },
    {
      name: 'Vebjørn Nordahl Stadsvoll',
      rating: 1400,
      gamesPlayed: 18,
      gamesWon: 8,
      gamesLost: 2,
      lastFiveGames: Trend.DOWN,
    },
    {
      name: 'Mathias Ackermann',
      rating: 1300,
      gamesPlayed: 18,
      gamesWon: 8,
      gamesLost: 2,
      lastFiveGames: Trend.DOWN,
    },
    {
      name: 'Arvid Mildner',
      rating: 1300,
      gamesPlayed: 18,
      gamesWon: 8,
      gamesLost: 2,
      lastFiveGames: Trend.UP,
    },
  ];

  // TODO this needs to be fetched from backend
  const gameHistory = [
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
  ];

  return (
    <>
      <Layout imageSizeAndPath={imageDto}>
        <Head>
          <title>Terraforming Mars</title>
        </Head>

        <RankingTable rows={rowData}></RankingTable>
        <Modal></Modal>
        <GameHistory gameHistory={gameHistory}></GameHistory>
      </Layout>
    </>
  );
};

export default Terraform;
