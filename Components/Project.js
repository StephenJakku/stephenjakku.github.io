function Project({ projImg, projName, projDesc, projUrl, projTags }) {
  return (
    <div className="flex flex-col text-black max-w-xs space-y-5 bg-slate-100 p-7 rounded-md justify-between">
      <div className="space-y-5">
        <div className="flex justify-center items-center">
          <img className="h-36 w-36 mb-5" src={projImg} alt={projName} />
        </div>
        <h1 className="font-bold">{projName}</h1>
        <p>{projDesc}</p>
        {projTags && projTags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {projTags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center items-center">
        <button
          className="bg-blue-500 px-5 py-2 rounded-sm mt-10 hover:bg-blue-700 text-white"
          onClick={() => window.open(projUrl, "_blank")}
        >
          View
        </button>
      </div>
    </div>
  );
}

export default Project;
