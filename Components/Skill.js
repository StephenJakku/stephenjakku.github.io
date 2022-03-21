const Skill = ({ source }) => {
  console.log(source);
  return (
    <div className="flex justify-center p-2">
      <img
        src={source}
        alt="logo"
        className="object-contain h-32 w-32 hover:bg-white rounded-md"
      />
    </div>
  );
};

export default Skill;
