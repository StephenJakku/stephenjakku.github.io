function About({ bgColor }) {
  return (
    <div
      className={`flex justify-center h-full ${bgColor} items-center text-white`}
    >
      <div className="space-y-3">
        <p>Hey, I am</p>
        <p className="text-5xl">Stephen Jakku</p>
        <p className="max-w-xl">
          Currently a Computer Science graduate student at California State
          University - Long Beach. I am an experienced DevOps Engineer,
          Middleware Developer who's trying to explore the front end world!
        </p>
      </div>
    </div>
  );
}

export default About;
