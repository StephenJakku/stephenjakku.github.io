import Head from "next/head";
import Navbar from "../Components/Navbar";
import Intro from "../Components/Intro";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import About from "../Components/About";
import { useRef, useState } from "react";

export default function Home() {
  const intRef = useRef(null);
  const expRef = useRef(null);
  const abtRef = useRef(null);
  const prjRef = useRef(null);
  const conRef = useRef(null);

  const ref = { intRef, abtRef, expRef, prjRef, conRef };

  const executeScroll = (componentRef) => {
    componentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-full">
      <Head>
        <title>Stephen Jakku</title>
        <meta name="description" content="Portfolio website of Stephen Jakku" />
      </Head>
      <div className="fixed top-0 left-0 right-0">
        <Navbar executeScroll={executeScroll} refs={ref} />
      </div>
      <main className="h-full">
        <div ref={intRef}></div>
        <Intro bgColor="bg-black" />
        <div ref={abtRef}></div>
        <About />
        <div ref={expRef}></div>
        <Experience bgColor="bg-gray-400" />
        <div ref={prjRef}></div>
        <Projects bgColor="bg-zinc-900" />
        <div ref={conRef}></div>
        <Contact bgColor="bg-black" />
      </main>

      <footer></footer>
    </div>
  );
}
