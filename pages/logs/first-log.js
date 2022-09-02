import Link from "next/link"
import Image from "next/image"

export default function FirstLog() {
  return (
    <>
      <Image
        src="/images/Tstorm_no-text.png"
        alt="Thoughtstorm logo with no text"
        width={90}
        height={80}
      />

      <h1>First Log</h1>

      <Link href="/">Back to home</Link>
    </>
  )
}
