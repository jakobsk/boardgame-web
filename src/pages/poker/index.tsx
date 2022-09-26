import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/Utils.module.css';
import RegisterModal from '../../components/poker/register-game-modal';
import RankingTable from '../../components/poker/ranking-table';
import { RowDataPoker } from '../../types/table';
import { Trend } from '../../constants/table';

// TODO: foldername should be changed to games and the specific game
// should be dynamically routed
const Terraform: NextPage = () => {
  const imageDto = {
    path: '/images/poker.png',
    height: 427,
    width: 614,
  };

  // TODO: this should be fetched from the backend

  const rowData: RowDataPoker[] = [
    {
      name: 'Jakob Stenersen Kok',
      netProfit: 1500,
      gamesPlayed: 18,
      lastFiveGames: Trend.UP,
    },
    {
      name: 'Vebjørn Nordahl Stadsvoll',
      netProfit: 1500,
      gamesPlayed: 18,
      lastFiveGames: Trend.UP,
    },
    {
      name: 'Mathias Ackermann',
      netProfit: 1500,
      gamesPlayed: 18,
      lastFiveGames: Trend.DOWN,
    },
    {
      name: 'Arvid Mildner',
      netProfit: 1500,
      gamesPlayed: 18,
      lastFiveGames: Trend.DOWN,
    },
  ];

  return (
    <>
      <Layout imageSizeAndPath={imageDto}>
        <Head>
          <title>Poker</title>
        </Head>

        <RankingTable rows={rowData}></RankingTable>

        <div className={utilStyles.centerContent}>
          <RegisterModal></RegisterModal>
        </div>
      </Layout>
    </>
  );
};

export default Terraform;
