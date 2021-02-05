import Page from "../../components/page"

export default function Home() {
    let fortune = "Your year will be filled with work based in a lot of effort but as with all previous years this will work out in your favor. You will meet new challenges with zeal and enthusiasm. When you encounter doubt, fears or concerns take this opportunity to challenge yourself to share these with your friend or coworkers, sometimes our flaws make us even more beautiful.";
    return <Page name="Aaron" lucky_numbers="13 26 37 12 14 01" fortune={fortune} />;
  }
  