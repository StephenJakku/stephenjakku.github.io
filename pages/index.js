import Head from "next/head";
import Navbar from "../Components/Navbar";
import Intro from "../Components/Intro";
import Education from "../Components/Education";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Skills from "../Components/Skills";
import { useRef } from "react";

export default function Home() {
  const intRef = useRef(null);
  const eduRef = useRef(null);
  const expRef = useRef(null);
  const sklRef = useRef(null);
  const prjRef = useRef(null);
  const conRef = useRef(null);

  const ref = { intRef, sklRef, expRef, eduRef, prjRef, conRef };

  const executeScroll = (componentRef) => {
    componentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>Stephen Jakku</title>
        <meta name="description" content="Portfolio website of Stephen Jakku" />
      </Head>

      {/* Navbar fixed to viewport */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar executeScroll={executeScroll} refs={ref} />
      </div>

      {/* Scrollable snap container — sits below navbar */}
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <Intro refer={intRef} />
        <Education refer={eduRef} />
        <Skills refer={sklRef} />
        <Experience refer={expRef} />
        <Projects refer={prjRef} />
        <Contact refer={conRef} />
      </main>
    </div>
  );
}
