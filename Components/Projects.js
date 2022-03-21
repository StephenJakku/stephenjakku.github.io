function Projects({ bgColor, refer }) {
  return (
    <div
      className={`flex-col justify-center h-full ${bgColor} items-top space-y-10`}
      ref={refer}
    >
      <div className="flex justify-center">
        <h1 className="pt-12 text-3xl font-extralight font text-white">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-3">
        <div className="flex justify-center items-center text-white">
          Project - 1
        </div>
        <div className="flex justify-center items-center text-white">
          Project - 2
        </div>
        <div className="flex justify-center items-center text-white">
          Project - 3
        </div>
      </div>
    </div>
  );
}

export default Projects;
