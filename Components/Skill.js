const Skill = ({ source, name }) => {
  return (
    <div className="flex flex-col justify-center items-center p-2 gap-2">
      <img
        src={source}
        alt={name}
        className="object-contain h-32 w-32 hover:bg-white rounded-md"
      />
      {name && (
        <span className="text-white text-xs text-center">{name}</span>
      )}
    </div>
  );
};

export default Skill;
