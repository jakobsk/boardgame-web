import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';
import utilStyles from '../styles/Utils.module.css';
import { ImageSizeAndPath } from '../types/image';

export const siteTitle = 'Den store brettspilltrackingen!';
const title = 'Brettspill rating';

export default function Layout({
  children,
  imageSizeAndPath,
  home,
}: {
  children: React.ReactNode;
  imageSizeAndPath: ImageSizeAndPath;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              className={utilStyles.borderCircle}
              src={imageSizeAndPath.path}
              height={imageSizeAndPath.height}
              width={imageSizeAndPath.width}
              alt="Brettspill logo"
            />
            <h1 className={utilStyles.heading2Xl}>{title}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src={imageSizeAndPath.path}
                  height={imageSizeAndPath.height}
                  width={imageSizeAndPath.width}
                  alt="Brettspill logo"
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Tilbake til hovedsiden</a>
          </Link>
        </div>
      )}
    </div>
  );
}
