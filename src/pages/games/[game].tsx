import Head from 'next/head';
import GameHistory from '../../components/game-history';
import Layout from '../../components/layout';
import Modal from '../../components/register-game-modal';
import RankingTable from '../../components/table';
import { getAllGamesTypes, getGameHistory, getTotalScores } from '../api/games';
import { GetStaticProps, GetStaticPaths } from 'next';
import styles from '../../styles/Modal.module.css';
import { getUsers } from '../api/users';

const Game = ({ totalScores, gameHistory, allUsers, gameId }) => {
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

        <RankingTable game={totalScores.game} rows={totalScores.rows} />
        <div className={`${styles.modalrelative}`}>
          <Modal users={allUsers} gameId={gameId} />
        </div>
        <GameHistory gameHistory={gameHistory} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const totalScores = await getTotalScores(params?.game);

  //FIXME: This is a bit hacky, but we need to get the gameId from the first row
  const gameId = totalScores.gameId;
  const gameHistory = await getGameHistory(parseInt(gameId));
  const allUsers = await getUsers();

  return {
    props: {
      totalScores: { rows: totalScores.totalScores, game: params?.game },
      gameHistory,
      allUsers,
      gameId: gameId,
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
