function Contact({ bgColor, refer }) {
  return (
    <div
      className={`flex justify-center items-end h-full ${bgColor} pb-5`}
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
            onClick={() => (window.location = "mailto:jakkustephen@gmail.com")}
            className="rounded-lg border-green-500 px-10 py-4 text-lg font-semibold border-2 text-green-500 hover:bg-green-100 hover:text-black"
          >
            Say, Hi
          </button>
        </div>
        <div className="flex justify-center items-center mx-5 pt-12">
          <ul className="flex space-x-4">
            <li>
              <img
                onClick={() =>
                  window.open("https://github.com/StephenJakku", "_blank")
                }
                className="h-10 w-10 hover:pb-2"
                src="/ghub.svg"
              ></img>
            </li>
            <li>
              <img
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/uttam-jakku",
                    "_blank"
                  )
                }
                className="h-10 w-10 hover:pb-2"
                src="/linkedin.svg"
              ></img>
            </li>
            <li>
              <img
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/stephen_jak/",
                    "_blank"
                  )
                }
                className="h-10 w-10 hover:pb-2"
                src="/insta.svg"
              ></img>
            </li>
            <li>
              <img
                onClick={() =>
                  window.open("https://twitter.com/stephen_jak", "_blank")
                }
                className="h-10 w-10 hover:pb-2"
                src="/twitter.svg"
              ></img>
            </li>
          </ul>
        </div>
        <div className="flex justify-center px-5 pb-10">
          <p className="text-white max-w-sm text-center">
            Designed & Built by Stephen Jakku
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
