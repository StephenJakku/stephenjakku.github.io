import personal from "../data/personal";

function Intro({ refer }) {
  return (
    <div
      className="min-h-screen snap-start flex flex-col justify-center bg-hero-gradient px-8"
      ref={refer}
    >
      <div className="max-w-2xl space-y-6 mx-auto w-full">
        <p className="text-accent text-sm font-medium tracking-widest uppercase">
          Hey, I am
        </p>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
          {personal.name}
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
          {personal.bio}
        </p>
        <div className="flex gap-4 pt-2">
          <button
            onClick={() => (window.location = `mailto:${personal.email}`)}
            className="bg-accent text-black font-semibold px-6 py-2.5 rounded hover:opacity-90 transition-opacity text-sm"
          >
            Get in Touch
          </button>
          <button
            onClick={() => window.open(personal.resumeUrl, "_blank")}
            className="border border-white/30 text-white px-6 py-2.5 rounded hover:border-white transition-colors text-sm"
          >
            View Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
