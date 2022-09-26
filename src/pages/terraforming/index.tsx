import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/Utils.module.css';
import RegisterModal from '../../components/terraform/register-game-modal';
import RankingTable from '../../components/terraform/ranking-table';
import { RowDataTerraform } from '../../types/table';
import { Trend } from '../../constants/table';

// TODO: foldername should be changed to games and the specific game
// should be dynamically routed
const Terraform: NextPage = () => {
  const imageDto = {
    path: '/images/terraform.png',
    height: 427,
    width: 614,
  };

  // TODO: this should be fetched from the backend

  const rowData: RowDataTerraform[] = [
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
          <RegisterModal></RegisterModal>
        </div>
      </Layout>
    </>
  );
};

export default Terraform;
