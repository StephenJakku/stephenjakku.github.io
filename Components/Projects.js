import Project from "./Project";
import projects from "../data/projects";

function Projects({ refer }) {
  return (
    <div
      className="min-h-screen snap-start flex flex-col justify-center bg-black"
      ref={refer}
    >
      <div className="flex justify-center">
        <h1 className="section-title">Projects</h1>
      </div>
      <div className="flex justify-center mt-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-6 max-w-5xl">
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
