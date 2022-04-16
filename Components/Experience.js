function Experience({ bgColor, refer }) {
  return (
    <div
      className={`flex-col justify-center lg:h-full ${bgColor} items-top space-y-10 `}
      ref={refer}
    >
      <div className=" flex justify-center">
        <h1 className="pt-12 text-3xl font-extralight font text-white">
          Experience
        </h1>
      </div>

      <div className="flex justify-center overflow-y-scroll scrollbar-hide h-3/4 border-2 m-10 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-black text-white max-w-6xl">
          <div className="grid grid-cols-2">
            <div className="flex justify-center p-4 ">
              <h1 className="font-medium text-3xl mb-4 text-slate-50">
                Accenture
              </h1>
            </div>
            <div className="flex justify-end">
              <div>
                <img src="/mile.png" alt="mile" />
              </div>
            </div>
          </div>
          <div className="p-4">
            <ul className="list">
              <li className="font-medium text-lg mb-4 text-slate-50">
                Application Development Analyst
              </li>
              <li>
                • Managed a team of Associate developers and Devops engineers
                from multiple locations.
              </li>
              <li>
                • Performed 300+ Mulesoft API/Application deployments to
                CloudHub along with their configuration management Anypoint
                Platform.
              </li>
              <li>
                • Proposed automated alerting system around the infrastructure
                to report frequently known issues.
              </li>
              <li>
                • Gained working knowledge of AWS Cloud environment and its
                tools. Certifed as an AWS Solutions Architect Associate.
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex justify-center p-4 ">
              <h1 className="font-medium text-3xl mb-4 text-slate-50">
                Accenture
              </h1>
            </div>
            <div className="flex justify-end">
              <div>
                <img src="/mile.png" alt="mile" />
              </div>
            </div>
          </div>
          <div className="p-4">
            <ul className="list">
              <li className="font-medium text-lg mb-4 text-slate-50">
                Application Development Associate
              </li>
              <li>
                • Been part of design, code, and support phases of implementing
                more than 250 integration solutions using IBM Integration Bus
                and its utilities.
              </li>
              <li>
                • Implemented DevOps automations around Middleware architecture
                on a production scale, planned and executed user management
                schemes for more than 200 users.
              </li>
              <li>
                • Successfully migrated more than 2000 repositories from CVS to
                Bitbucket along with their commit histories.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
