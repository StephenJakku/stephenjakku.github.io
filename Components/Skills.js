import Skill from "./Skill";
import skills from "../data/skills";

/* eslint-disable react/no-unescaped-entities */
function Skills({ bgColor, refer }) {
  return (
    <div
      className={`flex-col justify-center lg:h-full ${bgColor} items-top space-y-10 `}
      ref={refer}
    >
      <div className=" flex justify-center">
        <h1 className="pt-12 text-3xl font-extralight font text-white">
          Skills
        </h1>
      </div>
      <div className="flex justify-center pb-12">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 grid-rows-2 max-w-4xl p-4 mr-4 ml-4">
          {skills.map((skill, key) => (
            <Skill key={key} source={skill.logo} name={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
