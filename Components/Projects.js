import Project from "./Project";

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
      <div className="grid grid-cols-3 justify-center space-x-4 mx-16">
        <Project
          projImg="/spotify-svgrepo-com.svg"
          projName="Spotify Clone"
          projDesc="Spotify clone build using Next JS, Tailwind CSS, Spotify API,
            NextAuth and Recoil. Made use of new Middleware feature from Next JS
            12."
        />
        <Project
          projImg="/monitoring.png"
          projName="Virtual Sketcher"
          projDesc="This is a computer vision project which detects hands and palm landmarks in real time and uses the data to create a painter application."
        />
        <Project
          projImg="/next.svg"
          projName="My Portfolio Website"
          projDesc="Single page website built using Next Js react framework and Tailwind CSS. "
        />
      </div>
    </div>
  );
}

export default Projects;
