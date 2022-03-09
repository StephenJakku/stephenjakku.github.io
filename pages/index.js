import Head from "next/head";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import { useRef, useState } from "react";

export default function Home() {
  const [comp, setcomp] = useState("");
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <div className="h-full">
      <Head>
        <title>Stephen Jakku</title>
        <meta name="description" content="Portfolio website of Stephen Jakku" />
      </Head>
      <div className="fixed top-0 left-0 right-0">
        <Navbar executeScroll={executeScroll} comp={setcomp} />
      </div>
      <main className="h-full">
        <About />
        <Experience />
        <Projects />
        <Contact />
        <div ref={myRef}></div>
      </main>

      <footer></footer>
    </div>
  );
}
