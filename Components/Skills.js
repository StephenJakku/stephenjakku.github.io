/* eslint-disable react/no-unescaped-entities */
function Skills({ bgColor, refer }) {
  return (
    <div
      className={`flex-col justify-center h-full ${bgColor} items-top text-white space-y-10`}
      ref={refer}
    >
      <div className=" flex justify-center">
        <h1 className="pt-12 text-3xl font-extralight font">Skills</h1>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-6 grid-rows-2 max-w-4xl space-x-4 space-y-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
            alt="logo"
            className="object-contain h-48 w-48 hover:bg-white rounded-md"
          />
          <img
            src="https://www.jenkins.io/images/logos/jenkins/jenkins.svg"
            alt="logo"
            className="object-contain h-48 w-48 hover:bg-white rounded-md"
          />
          <img
            src="https://www.vectorlogo.zone/logos/mulesoft/mulesoft-icon.svg"
            alt="logo"
            className="object-contain h-48 w-48 hover:bg-white rounded-md"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Devops-toolchain.svg"
            alt="logo"
            className="object-contain h-48 w-48 hover:bg-white rounded-md"
          />
          <img
            src="https://www.vectorlogo.zone/logos/bitbucket/bitbucket-official.svg"
            alt="logo"
            className="object-contain h-48 w-48 hover:bg-white rounded-md"
          />
          <img
            src="https://www.python.org/static/community_logos/python-logo-generic.svg"
            alt="logo"
            className="object-contain h-48 w-48 hover:bg-white rounded-md"
          />
          <img
            src="https://www.vectorlogo.zone/logos/java/java-icon.svg"
            alt="logo"
            className="object-contain h-48 w-48 hover:bg-white rounded-md"
          />
          <img
            src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg"
            alt="logo"
            className="object-contain h-48 w-48 hover:bg-white rounded-md"
          />
          <img
            src="https://www.vectorlogo.zone/logos/splunk/splunk-ar21.svg"
            alt="logo"
            className="object-contain h-48 w-48 hover:bg-white rounded-md"
          />
          <img
            src="https://www.vectorlogo.zone/logos/linux/linux-ar21.svg"
            alt="logo"
            className="object-contain h-48 w-48 hover:bg-white rounded-md"
          />
          <img
            src="https://www.vectorlogo.zone/logos/docker/docker-official.svg"
            alt="logo"
            className="object-contain h-48 w-48 hover:bg-white rounded-md"
          />
          <img
            src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
            alt="logo"
            className="object-contain h-48 w-48 hover:bg-white rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
