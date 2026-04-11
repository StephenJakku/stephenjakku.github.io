import Project from "./Project";
import projects from "../data/projects";

function Projects({ bgColor, refer }) {
  return (
    <div
      className={`flex-col justify-center lgh-full ${bgColor} items-top space-y-10`}
      ref={refer}
    >
      <div className="flex justify-center">
        <h1 className="pt-12 text-3xl font-extralight font text-white">
          Projects
        </h1>
      </div>
      <div className="flex justify-center pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 mx-4">
          {projects.map((project, index) => (
            <Project
              key={index}
              projImg={project.image}
              projName={project.name}
              projDesc={project.description}
              projUrl={project.url}
              projTags={project.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
