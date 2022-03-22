function Project({ projImg, projName, projDesc }) {
  return (
    <div className="flex-col text-black max-w-xs space-y-5 bg-slate-100 justify-center items-center p-5 rounded-md">
      <div className="flex justify-center items-center">
        <img className="h-36 w-36 mb-5" src={projImg} alt="proj" />
      </div>
      <h1 className=" font-bold">{projName}</h1>
      <p>{projDesc}</p>
      <div className="flex justify-center items-center bottom-0">
        <button
          className="bg-blue-500 px-5 py-2 rounded-sm mt-10 hover:bg-blue-700"
          onClick={() =>
            window.open(
              "https://github.com/StephenJakku/spotify-webapp-tailwindcss",
              "_blank"
            )
          }
        >
          View
        </button>
      </div>
    </div>
  );
}

export default Project;
