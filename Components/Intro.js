import personal from "../data/personal";

/* eslint-disable react/no-unescaped-entities */
function Intro({ bgColor, refer }) {
  return (
    <div
      className={`flex justify-center h-full ${bgColor} items-center text-white px-12 `}
      ref={refer}
    >
      <div className="space-y-3">
        <p>Hey, I am</p>
        <p className="text-5xl">{personal.name}</p>
        <p className="max-w-xl">{personal.bio}</p>
      </div>
    </div>
  );
}

export default Intro;
