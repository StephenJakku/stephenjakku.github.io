import personal from "../data/personal";

function Contact({ refer }) {
  return (
    <div
      className="min-h-screen snap-start flex flex-col justify-center items-center bg-slate-100 dark:bg-zinc-950 py-20"
      ref={refer}
    >
      <div className="flex flex-col items-center space-y-8 max-w-lg mx-6 text-center">
        <h1 className="section-title">Get In Touch</h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
          I am currently open for new opportunities. Whether it's a question or
          just a hello — my inbox is always open.
        </p>
        <button
          onClick={() => (window.location = `mailto:${personal.email}`)}
          className="bg-accent text-black font-semibold px-10 py-3 rounded hover:opacity-90 transition-opacity text-base"
        >
          Say Hi
        </button>
        <div className="flex space-x-5 pt-4">
          {personal.socials.map((social) => (
            <img
              key={social.label}
              onClick={() => window.open(social.url, "_blank")}
              className="h-7 w-7 cursor-pointer opacity-60 hover:opacity-100 hover:-translate-y-1 transition-all duration-200 dark:invert-0 invert"
              src={social.icon}
              alt={social.label}
            />
          ))}
        </div>
        <p className="text-slate-400 dark:text-slate-600 text-sm pt-6">
          Designed & Built by {personal.name}
        </p>
      </div>
    </div>
  );
}

export default Contact;
