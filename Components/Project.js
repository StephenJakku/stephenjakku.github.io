function Project({ projImg, projName, projDesc, projUrl, projTags }) {
  return (
    <div className="flex flex-col space-y-4 bg-zinc-900 border border-white/10 p-6 rounded-lg hover:border-accent/40 transition-all duration-200 group">
      <div className="flex justify-center items-center bg-black/40 rounded-md p-4 h-32">
        <img className="h-20 w-20 object-contain" src={projImg} alt={projName} />
      </div>
      <div className="space-y-2 flex-1">
        <h1 className="text-white font-semibold text-base">{projName}</h1>
        <p className="text-slate-400 text-sm leading-relaxed">{projDesc}</p>
      </div>
      {projTags && projTags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {projTags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <button
        className="w-full border border-white/20 text-white text-sm py-2 rounded hover:border-accent hover:text-accent transition-all duration-200 mt-2"
        onClick={() => window.open(projUrl, "_blank")}
      >
        View on GitHub
      </button>
    </div>
  );
}

export default Project;
