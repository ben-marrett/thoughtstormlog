import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thoughtstorm® Log</title>
        <meta name="description" content="Thoughtstorm® Log" />
        <link rel="icon" href="/images/Tstorm_logo-2017.jpg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.official}> Record your log here.</h1>
        <Image
          src="/images/Tstorm_logo-2017.jpg"
          alt="Thoughtstorm Logo"
          width={450}
          height={450}
        />

        <Link href={`/logs/first-log`}>View logs</Link>
        <br />
        <Link href={`/logs/new-log`}>Record new log</Link>
      </main>

      <footer className={styles.footer}>
        <a className={styles.official}>
          {' '}
          Dedicated to the companions who see the possibility
        </a>
        <br />
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
