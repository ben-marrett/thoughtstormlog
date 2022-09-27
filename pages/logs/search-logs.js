import SearchForm from "../../lib/searchForm";
import styles from '../../styles/Home.module.css'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function SearchLogs() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Thoughtstorm® Log</title>
        <meta name="description" content="Thoughtstorm® Log" />
        <link rel="icon" href="/images/Tstorm_logo-2017.jpg" />
      </Head>

      <main className={styles.main}>
        {/* <h2 className={styles.official}> Search</h2> */}
        <Image
          src="/images/Tstorm_no-text.png"
          alt="Thoughtstorm logo with no text"
          width={90}
          height={80}
        />
        <br />
        <SearchForm />
        <br />
        <Link href="/logs/view-logs">Return to logs</Link>
        <br />
        <Link href="/">Home</Link>
      </main>
    </div>
  )
}