import Head from "next/head";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import { useRef, useState } from "react";

export default function Home() {
  const [comp, setcomp] = useState("");
  const expRef = useRef(null);
  const abtRef = useRef(null);
  const prjRef = useRef(null);
  const conRef = useRef(null);
  const executeScroll = () => {
    if (comp == "exp") {
      expRef.current.scrollIntoView();
      console.log("EXP");
    } else if (comp == "abt") {
      abtRef.current.scrollIntoView();
      console.log("ABT");
    } else if (comp == "prj") {
      prjRef.current.scrollIntoView();
      console.log("PRJ");
    } else if (comp == "con") {
      conRef.current.scrollIntoView();
      console.log("CON");
    }
  };

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
        <div ref={abtRef}></div>
        <About bgColor="bg-black" />
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
