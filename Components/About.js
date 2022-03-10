/* eslint-disable react/no-unescaped-entities */
function About({ bgColor }) {
  return (
    <div className="{`flex justify-center h-full ${bgColor} items-center text-white`}">
      <div>
        <h1 className="pt-12">About</h1>
      </div>
    </div>
  );
}

export default About;
