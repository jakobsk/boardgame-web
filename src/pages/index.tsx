import type { NextPage } from 'next';
import Head from 'next/head';
import utilStyles from '../styles/Utils.module.css';
import homeStyles from '../styles/Home.module.css';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';

const Home: NextPage = () => {
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
          <Link href="/terraforming">
            <a className={homeStyles.card}>
              <h2>Terraforming Mars</h2>
            </a>
          </Link>
          <Link href="/terraforming">
            <a className={homeStyles.card}>
              <h2>Et annet spill</h2>
            </a>
          </Link>
          <Link href="/terraforming">
            <a className={homeStyles.card}>
              <h2>Et annet spill</h2>
            </a>
          </Link>
          <Link href="/terraforming">
            <a className={homeStyles.card}>
              <h2>Et annet spill</h2>
            </a>
          </Link>
        </section>
      </div>
      <footer className={homeStyles.footer}> HELLO </footer>
    </Layout>
  );
};

export default Home;
