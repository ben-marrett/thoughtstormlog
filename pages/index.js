import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thoughtstorm® Log</title>
        <meta name="description" content="Thoughtstorm® Log" />
        <link rel="icon" href="/Tstorm_logo-2017.jpg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <a href="https://www.avataroceania.com/thoughtstorm/">
            Thoughtstorm®
          </a>
        </h1>

        <p className={styles.description}>This is a page to record your log.</p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Logs &rarr;</h2>
            <p>Click to begin a new log or see older logs.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Instructions &rarr;</h2>
            <p>Read through the Thoughtstorm® instructions.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Avatar &rarr;</h2>
            <p>Get more information on Avatar.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <br />
        <a>
          Thoughtstorm® and Avatar® are registered trademarks of Star’s Edge,
          Inc. All rights reserved.
        </a>
      </footer>
    </div>
  )
}
