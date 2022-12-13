import Head from 'next/head';
import GameHistory from '../../components/game-history';
import Layout from '../../components/layout';
import Modal from '../../components/register-game-modal';
import RankingTable from '../../components/table';
import { getAllGamesTypes, getGameHistory, getTotalScores } from '../api/games';
import { GetStaticProps, GetStaticPaths } from 'next';
import styles from '../../styles/Modal.module.css';
import { getUsers } from '../api/users';

const Game = ({ totalScores, gameHistory, allUsers }) => {
  // FIX: loose link between game data and image, should retrieve perhaps from backend
  const imageDto = {
    path: `/images/${totalScores.game}.png`,
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
          game={totalScores.game}
          rows={totalScores.rows}
        ></RankingTable>
        <div className={`${styles.modalrelative}`}>
          <Modal users={allUsers}></Modal>
        </div>
        <GameHistory gameHistory={gameHistory}></GameHistory>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const totalScores = await getTotalScores(params?.game);
  const gameHistory = totalScores.length
    ? await getGameHistory(parseInt(totalScores[0].gameId))
    : [];
  const allUsers = await getUsers();
  console.log('HALLA: ', allUsers);
  return {
    props: {
      totalScores: { rows: totalScores, game: params?.game },
      gameHistory,
      allUsers,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const gameTypes = await getAllGamesTypes();
  const paths = gameTypes.map((gameType) => {
    return {
      params: { game: gameType.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default Game;
