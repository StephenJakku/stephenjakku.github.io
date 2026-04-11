import personal from "../data/personal";

function Contact({ bgColor, refer }) {
  return (
    <div
      className={`flex justify-center items-end h-full ${bgColor} pb-5 `}
      ref={refer}
    >
      <div className="flex flex-col space-y-10">
        <div className="flex justify-center items-center">
          <h1 className="pt-12 text-3xl font-extralight font text-white">
            Get In Touch
          </h1>
        </div>
        <div className="flex justify-center items-center px-12">
          <p className="text-white max-w-lg text-center text-xl">
            I am currently open for any new opportunities, my inbox is always
            open. I am just a click away
          </p>
        </div>
        <div className="flex justify-center items-center pt-10">
          <button
            onClick={() => (window.location = `mailto:${personal.email}`)}
            className="rounded-lg border-green-500 px-10 py-4 text-lg font-semibold border-2 text-green-500 hover:bg-green-100 hover:text-black"
          >
            Say, Hi
          </button>
        </div>
        <div className="flex justify-center items-center mx-5 pt-12">
          <ul className="flex space-x-4">
            {personal.socials.map((social) => (
              <li key={social.label}>
                <img
                  onClick={() => window.open(social.url, "_blank")}
                  className="h-10 w-10 hover:pb-2 cursor-pointer"
                  src={social.icon}
                  alt={social.label}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center px-5 pb-10">
          <p className="text-white text-center">
            Designed & Built by {personal.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
