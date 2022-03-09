import Head from "next/head";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <div className="h-full">
      <Head>
        <title>Stephen Jakku</title>
        <meta name="description" content="Portfolio website of Stephen Jakku" />
      </Head>
      <main className="flex">
        <Navbar />
      </main>

      <footer></footer>
    </div>
  );
}
