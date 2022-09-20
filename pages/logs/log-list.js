import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import styles from '../../styles/Home.module.css'
import Footer from "../../lib/footer"
import SearchForm from "../../lib/searchForm"

export default function FirstLog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thoughtstorm® Log</title>
        <meta name="description" content="Thoughtstorm® Log" />
        <link rel="icon" href="/images/Tstorm_logo-2017.jpg" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/images/Tstorm_no-text.png"
          alt="Thoughtstorm logo with no text"
          width={90}
          height={80}
        />

        <h1>List logs here</h1>

        <SearchForm />
        
        <Link href="/">Back to home</Link>
      </main>
      <Footer />
    </div>
  )
}
