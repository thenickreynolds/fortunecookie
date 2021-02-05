import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Page({ name, fortune, lucky_numbers }) {
  let [showFortune, setShowFortune] = useState(false);
  let fortuneStyle = {visibility: showFortune ? '' : 'hidden', opacity: showFortune ? 1.0 : 0 };

  return (
    <div className={styles.container}>
      <Head>
        <title>Happy Fortune {name}</title>

        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <main className={styles.main}>
          
        <h1 className={styles.title}>
          Happy Fortune <br /> {name}
        </h1>

        <div className={styles.cookie} onClick={() => setShowFortune(!showFortune)}>
           🥠
        </div>

        <div className={styles.fortune}>
            <div className={styles.fortune_text} style={fortuneStyle}>{fortune}</div>
            <div className={styles.fortune_numbers} style={fortuneStyle}>Your lucky numbers are<br />{lucky_numbers}</div>
        </div>
      </main>
    </div>
  )
}
