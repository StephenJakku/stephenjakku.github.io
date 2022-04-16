import Skill from "./Skill";

/* eslint-disable react/no-unescaped-entities */
function Skills({ bgColor, refer }) {
  const svgs = [
    "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    "https://www.jenkins.io/images/logos/jenkins/jenkins.svg",
    "https://www.vectorlogo.zone/logos/mulesoft/mulesoft-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Devops-toolchain.svg",
    "https://www.vectorlogo.zone/logos/bitbucket/bitbucket-official.svg",
    "https://www.python.org/static/community_logos/python-logo-generic.svg",
    "https://www.vectorlogo.zone/logos/java/java-icon.svg",
    "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg",
    "https://www.vectorlogo.zone/logos/splunk/splunk-ar21.svg",
    "https://www.vectorlogo.zone/logos/linux/linux-ar21.svg",
    "https://www.vectorlogo.zone/logos/docker/docker-official.svg",
    "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
  ];

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
          {svgs.map((url, key) => (
            <Skill key={key} source={url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
