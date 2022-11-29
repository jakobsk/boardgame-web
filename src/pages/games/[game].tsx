import Head from 'next/head';
import GameHistory from '../../components/game-history';
import Layout from '../../components/layout';
import Modal from '../../components/register-game-modal';
import RankingTable from '../../components/table';
import { getAllGamesTypes, getGameData } from '../api/games';
import { GetStaticProps, GetStaticPaths } from 'next';
import { toCamelCase } from '../../utils/string-utils';

const Game = ({ gameData }) => {
  // FIX: loose link between game data and image, should retrieve perhaps from backend
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
  const gameData = await getGameData(params?.game);
  return {
    props: {
      gameData,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const gameTypes = await getAllGamesTypes();

  const paths = gameTypes.map((gameType) => {
    return {
      params: { game: toCamelCase(gameType.name) },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default Game;
