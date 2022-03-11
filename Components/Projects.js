function Projects({ bgColor, refer }) {
  return (
    <div
      className={`flex justify-center h-full ${bgColor} items-center`}
      ref={refer}
    >
      <p className="text-white">Projects</p>
    </div>
  );
}

export default Projects;
