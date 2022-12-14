import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import styles from '../../styles/Home.module.css'
import Footer from "../../lib/footer"

export default function FirstLog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ThoughtstormÂ® Log</title>
        <meta name="description" content="ThoughtstormÂ® Log" />
        <link rel="icon" href="/images/Tstorm_logo-2017.jpg" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/images/Tstorm_no-text.png"
          alt="Thoughtstorm logo with no text"
          width={90}
          height={80}
        />
        <br />
        <Link href="/logs/all-logs">Browse All</Link>
        <br />
        <Link href="/logs/search-logs">Search Logs</Link>
        <br />
        <Link href="/">Home</Link>
      </main>
      <Footer />
    </div>
  )
}
