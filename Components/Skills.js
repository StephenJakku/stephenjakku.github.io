/* eslint-disable react/no-unescaped-entities */
function Skills({ bgColor, refer }) {
  return (
    <div
      className="{`flex justify-center h-full ${bgColor} items-center text-white`}"
      ref={refer}
    >
      <div>
        <h1 className="pt-12">Skills</h1>
      </div>
    </div>
  );
}

export default Skills;
