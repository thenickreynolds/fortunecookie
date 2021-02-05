import Page from "../../components/page"

export default function Home() {
  let fortune = "Your year is headed for the stars but as will all great journeys there will be a few bumps along the way. The great news is that you've got a huge number of friends and cheerleaders that will always be there for you and will relish in celebrating with you at the end. Remember that your hardest and scariest decisions in your past have also been some of your best! Make sure you rejoice in your own steps (metaphorical and physical) as much as your friends do with you.";
  return <Page name="Jonathan" lucky_numbers="55 04 20 08 22 52" fortune={fortune} />
}
