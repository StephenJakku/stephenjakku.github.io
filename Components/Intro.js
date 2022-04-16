/* eslint-disable react/no-unescaped-entities */
function Intro({ bgColor, refer }) {
  return (
    <div
      className={`flex justify-center h-full ${bgColor} items-center text-white px-12 `}
      ref={refer}
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

export default Intro;
