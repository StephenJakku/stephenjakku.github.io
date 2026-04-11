import education from "../data/education";

function Education({ bgColor, refer }) {
  return (
    <div
      className={`flex-col justify-center lg:h-full ${bgColor} items-top space-y-10`}
      ref={refer}
    >
      <div className="flex justify-center">
        <h1 className="pt-12 text-3xl font-extralight text-white">
          Education
        </h1>
      </div>

      <div className="flex justify-center pb-12">
        <div className="flex flex-col gap-6 w-full max-w-3xl mx-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className="border border-white/20 rounded-lg p-6 text-white"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-xl font-medium">{edu.institution}</h2>
                  <p className="text-slate-300">
                    {edu.degree} &mdash; {edu.field}
                  </p>
                </div>
                <span className="text-slate-400 text-sm whitespace-nowrap">
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
