import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/Utils.module.css';
import Modal from '../../components/register-game-modal';
import RankingTable from '../../components/ranking-table';
import { RowData } from '../../types/table';
import { Trend } from '../../constants/table';
import Chart from '../../components/chart';

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

  return (
    <>
      <Layout imageSizeAndPath={imageDto}>
        <Head>
          <title>Terraforming Mars</title>
        </Head>

        <RankingTable rows={rowData}></RankingTable>

        <div className={utilStyles.centerContent}>
          <Modal></Modal>
        </div>
        <Chart></Chart>
      </Layout>
    </>
  );
};

export default Terraform;
