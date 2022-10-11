import Head from 'next/head';
import utilStyles from '../styles/Utils.module.css';
import homeStyles from '../styles/Home.module.css';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';

import { GetStaticProps } from 'next';
import { getAllGamesTypes } from './api/games';
import { toCamelCase } from '../utils/string-utils';
import { GameType } from '../models/game-type';

type GameTypesWithLink = GameType & { link: string };

const Home = ({ gameTypes }: { gameTypes: GameTypesWithLink[] }) => {
  const imageDto = {
    path: '/images/frontpage_header.png',
    height: 313.5,
    width: 300,
  };

  return (
    <Layout home imageSizeAndPath={imageDto}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.textAlign}>
        <section className={utilStyles.headingMd}>
          <p>
            Lenge har vi ventet. Hvem er egentlig best? Det er på tide å finne
            ut
          </p>
          <p>Fete features kommer snart.. stay tuned..</p>
        </section>
        <section className={homeStyles.grid}>
          {gameTypes.map((game) => (
            <Link href={`/games/${game.link}`} key={game.id}>
              <a className={homeStyles.card}>
                <h2>{game.name}</h2>
              </a>
            </Link>
          ))}
        </section>
      </div>
      <footer className={homeStyles.footer}> HELLO THERE </footer>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  //TODO: should not be necessary

  const gameTypes = await getAllGamesTypes();
  const gameTypesWithLinks = gameTypes.map((game) => {
    return { ...game, link: toCamelCase(game.name) };
  });
  return {
    props: {
      gameTypesWithLinks,
    },
  };
};

export default Home;
