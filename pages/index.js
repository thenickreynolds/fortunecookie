import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Happy Fortune</title>

        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to your 🥠
        </h1>

        <p className={styles.description}>
          Are you <a href="/aaron">Aaron</a> or <a href="/jonathan">Jonathan</a> or <a href="/stranger">a mysterious stranger</a>?
        </p>
        </main>
    </div>
  )
}
