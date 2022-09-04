import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import styles from '../../styles/Home.module.css'
import LogForm from "../form"

export default function NewLog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>New Log</title>
        <meta name="description" content="New Log" />
        <link rel="icon" href="/images/Tstorm_logo-2017.jpg" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/images/Tstorm_no-text.png"
          alt="Thoughtstorm logo with no text"
          width={90}
          height={80}
        />
        <h1>Enter your new log.</h1>
        <LogForm />

        <Link href="/">Back to home</Link>
      </main>
    </div>
  )
}