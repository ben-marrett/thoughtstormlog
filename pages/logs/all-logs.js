import styles from '../../styles/Home.module.css'
import Footer from '../../lib/footer'
import Link from 'next/link'

export default function AllLogs() {
  return (
    <>
      <main className={styles.main}>
        <div>List all logs here.</div>
        <br />
        <Link href="/">Home</Link>
      </main>

      <Footer />
    </>
  )
}
