const Skill = ({ source, name }) => {
  return (
    <div className="flex flex-col justify-center items-center p-4 gap-2 rounded-lg border border-white/10 hover:border-accent/50 hover:bg-white/5 transition-all duration-200 cursor-default group">
      <img
        src={source}
        alt={name}
        className="object-contain h-10 w-10 group-hover:scale-110 transition-transform duration-200"
      />
      {name && (
        <span className="text-slate-400 text-xs text-center group-hover:text-white transition-colors">
          {name}
        </span>
      )}
    </div>
  );
};

export default Skill;
