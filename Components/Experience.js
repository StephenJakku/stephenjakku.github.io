import experience from "../data/experience";

function Experience({ refer }) {
  return (
    <div
      className="snap-start flex flex-col items-center bg-zinc-950 py-24"
      ref={refer}
    >
      <h1 className="section-title">Experience</h1>

      <div className="flex flex-col gap-6 w-full max-w-3xl mx-6 mt-10">
        {experience.map((job, index) => (
          <div
            key={index}
            className="border border-white/10 rounded-lg p-6 hover:border-accent/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
              <div>
                <h2 className="text-white text-lg font-semibold">{job.role}</h2>
                <p className="text-accent text-sm font-medium">{job.company}{job.team ? ` · ${job.team}` : ""}</p>
                <p className="text-slate-600 text-xs mt-0.5">{job.location}</p>
              </div>
              <span className="text-slate-500 text-xs whitespace-nowrap mt-1">{job.duration}</span>
            </div>
            <ul className="space-y-2">
              {job.bullets.map((bullet, i) => (
                <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                  <span className="text-accent mt-1 flex-shrink-0">›</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
