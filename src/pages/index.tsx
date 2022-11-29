import Head from 'next/head';
import utilStyles from '../styles/Utils.module.css';
import homeStyles from '../styles/Home.module.css';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import { getAllGames } from './api/games';
import { GetStaticProps } from 'next';

const Home = ({ games }) => {
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
          {games.map(({ game }) => (
            <Link href={`/games/${game}`} key={game}>
              <a className={homeStyles.card}>
                <h2>{game}</h2>
              </a>
            </Link>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  //TODO: should not be necessary

  const allGames = await getAllGames();
  const games = allGames.map((game) => game.params);
  return {
    props: {
      games,
    },
  };
};

export default Home;
