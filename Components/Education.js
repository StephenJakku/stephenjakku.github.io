import education from "../data/education";

function Education({ refer }) {
  return (
    <div
      className="min-h-screen snap-start flex flex-col justify-center bg-white dark:bg-zinc-950"
      ref={refer}
    >
      <div className="flex flex-col items-center w-full max-w-3xl mx-auto px-6">
        <h1 className="section-title">Education</h1>
        <p className="text-slate-500 text-sm mt-2 mb-12 text-center">
          Academic background and qualifications
        </p>

        <div className="flex flex-col gap-6 w-full">
          {education.map((edu, index) => (
            <div
              key={index}
              className="border-l-2 border-accent pl-8 py-6 bg-slate-50 dark:bg-white/5 rounded-r-xl hover:bg-slate-100 dark:hover:bg-white/8 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="space-y-2">
                  <h2 className="text-slate-900 dark:text-white text-xl font-semibold">{edu.institution}</h2>
                  <p className="text-slate-500 dark:text-slate-400">
                    {edu.degree} &mdash; {edu.field}
                  </p>
                </div>
                <span className="text-accent text-sm font-medium whitespace-nowrap bg-accent/10 px-3 py-1 rounded-full self-start sm:self-auto">
                  {edu.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
