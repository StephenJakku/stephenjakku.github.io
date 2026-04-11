import experience from "../data/experience";

function Experience({ bgColor, refer }) {
  return (
    <div
      className={`flex-col justify-center lg:h-full ${bgColor} items-top space-y-10 `}
      ref={refer}
    >
      <div className=" flex justify-center">
        <h1 className="pt-12 text-3xl font-extralight font text-white">
          Experience
        </h1>
      </div>

      <div className="flex justify-center overflow-y-scroll scrollbar-hide h-3/4 border-2 m-10 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-black text-white max-w-6xl">
          {experience.map((job, index) => (
            <>
              <div key={`header-${index}`} className="grid grid-cols-2">
                <div className="flex justify-center p-4">
                  <h1 className="font-medium text-3xl mb-4 text-slate-50">
                    {job.company}
                  </h1>
                </div>
                <div className="flex justify-end">
                  <img src={job.logo} alt={job.company} />
                </div>
              </div>
              <div key={`detail-${index}`} className="p-4">
                <ul className="list">
                  <li className="font-medium text-lg mb-4 text-slate-50">
                    {job.role}
                  </li>
                  {job.duration && (
                    <li className="text-slate-400 text-sm mb-3">{job.duration}</li>
                  )}
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
