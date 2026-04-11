import { useState } from "react";
import skills from "../data/skills";

function SkillChip({ skill }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={
        hovered
          ? { boxShadow: "0 0 12px 2px rgba(56, 189, 248, 0.4)", borderColor: "#38bdf8" }
          : {}
      }
      className="flex items-center gap-3 bg-white border border-white/10 rounded-full px-5 py-2.5 transition-all duration-200 cursor-default"
    >
      <img
        src={skill.logo}
        alt={skill.name}
        className="h-5 w-5 object-contain flex-shrink-0"
      />
      <span className="text-sm font-medium text-gray-700">
        {skill.name}
      </span>
    </div>
  );
}

function Skills({ refer }) {
  const allSkills = skills.flatMap((group) =>
    group.items.map((item) => ({
      ...item,
      glow: group.glow,
      borderActive: group.borderActive,
    }))
  );

  return (
    <div
      className="min-h-screen snap-start flex flex-col justify-center bg-black"
      ref={refer}
    >
      <div className="flex flex-col items-center w-full max-w-3xl mx-auto px-6">
        <h1 className="section-title">Skills</h1>
        <p className="text-slate-500 text-sm mt-2 mb-12 text-center">
          Technologies and tools I work with
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {allSkills.map((skill) => (
            <SkillChip
              key={skill.name}
              skill={skill}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
