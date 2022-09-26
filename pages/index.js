import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Footer from '../lib/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thoughtstorm® Log</title>
        <meta name="description" content="Thoughtstorm® Log" />
        <link rel="icon" href="/images/Tstorm_logo-2017.jpg" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.official}> Record your logs here.</h2>
        <Image
          src="/images/Tstorm_logo-2017.jpg"
          alt="Thoughtstorm Logo"
          width={450}
          height={450}
          priority
        />

        <Link href={`/logs/view-logs`}>View logs</Link>
        <br />
        <Link href={`/logs/new-log`}>Record new log</Link>
      </main>

      <Footer />
    </div>
  )
}
