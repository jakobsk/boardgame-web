import Head from 'next/head';
import GameHistory from '../../components/game-history';
import Layout from '../../components/layout';
import Modal from '../../components/register-game-modal';
import RankingTable from '../../components/table';
import { getAllGames, getGameData } from '../../api/games';
import { GetStaticProps, GetStaticPaths } from 'next';

const Game = ({ gameData }) => {
  const imageDto = {
    path: `/images/${gameData.game}.png`,
    height: 427,
    width: 614,
  };

  return (
    <>
      <Layout imageSizeAndPath={imageDto}>
        <Head>
          <title>Terraforming Mars</title>
        </Head>

        <RankingTable
          game={gameData.game}
          rows={gameData.rowData}
        ></RankingTable>
        <Modal></Modal>
        <GameHistory gameHistory={gameData.gameHistory}></GameHistory>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //TODO: should not be necessary
  const game = params?.game ? params.game : 'terraforming';

  const gameData = await getGameData(game);
  return {
    props: {
      gameData,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllGames();
  return {
    paths,
    fallback: false,
  };
};

export default Game;
