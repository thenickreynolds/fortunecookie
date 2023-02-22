import Head from "next/head";
import styles from "../styles/Home.module.css";
import Page from "../components/page";
import fortunes from "../utils/fortunes";
import { useEffect, useState } from "react";

function getRandomInt(max) {
  let num = Math.floor(Math.random() * Math.floor(max));
  return num <= 9 ? "0" + num : num;
}

export default function Home() {
  const [fortune, setFortune] = useState({ fortune: "", numbers: "" });
  useEffect(() => {
    let number1 = getRandomInt(50);
    let number2 = getRandomInt(50);
    let number3 = getRandomInt(50);
    let number4 = getRandomInt(50);
    let number5 = getRandomInt(50);
    let number6 = getRandomInt(50);

    let numbers = `${number1} ${number2} ${number3} ${number4} ${number5} ${number6}`;

    let fortune_num = Math.floor(Math.random() * Math.floor(fortunes.length));
    let fortune = fortunes[fortune_num];
    setFortune({ fortune, numbers });
  }, [setFortune]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Happy Fortune</title>

        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <main className={styles.main}>
        <Page
          name="🧙🔮🍪"
          lucky_numbers={fortune.numbers}
          fortune={fortune.fortune}
        />
      </main>
    </div>
  );
}
