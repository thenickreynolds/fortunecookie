import Page from "../../components/page"

export default function Home() {
    let fortune = "Your year will be filled with a lot of joy and work. As with all years previous you work will be fruitful and your efforts will be repaid in fortune. You will meet new challenges with zeal and enthusiasm, that said -  when you encounter doubt, fears or concerns take the opportunity to share these with your friends or coworkers - often our flaws make us even more beautiful.";
    return <Page name="Aaron" lucky_numbers="13 26 37 12 14 01" fortune={fortune} />;
  }
  