function Experience({ bgColor }) {
  return (
    <div className={`flex justify-center h-full ${bgColor}`}>
      <div className="space-y-4">
        <div>
          <p className="text-black pt-12 text-2xl font-medium">Experience</p>
        </div>

        <div className="overflow-y-scroll scrollbar-hide h-3/4">
          <div className="grid grid-cols-2 bg-black text-white max-w-6xl">
            <div className="flex justify-start p-4 border-r-2 border-white">
              <h1>Application Development Analyst</h1>
            </div>
            <div className="p-4">
              <ul className="list">
                <li>
                  • Managed a team consisting of members ranging from Associate
                  developers to Devops engineers in three different locations
                  and collaborated with Business Partners, Operations,
                  Stakeholders to maintian and upgrade the production
                  infrastructure.
                </li>
                <li>
                  • Performed 300+ Mulesoft API/Application deployments to
                  CloudHub and configuration management – RAML deployment, Proxy
                  deployments, Policies enforcements, Contracts, Gateway setup
                  using Anypoint Platform.
                </li>
                <li>
                  • Developed a script for efficient management of users based
                  on their active login sessions in Bitbucket leading to a
                  saving of 50% of users licensing costs to the client.
                </li>
                <li>
                  • Proposed automated alerting system around the infrastructure
                  to report frequently known issues as soon as they raise which
                  resulted in quicker and more efficient fixes drastically
                  reducing of the resolution times by 75%.
                </li>
                <li>
                  • Gained working knowledge of AWS Cloud environment and its
                  tools and hands on knowledge of SSH, PGP and SFTP
                  implementations for data security.
                </li>
              </ul>
            </div>
            <div className="flex justify-start p-4 border-r-2 border-white">
              <h1>Application Development Associate</h1>
            </div>
            <div className="p-4">
              <ul className="list">
                <li>
                  • Been part of design, code, and support phases of
                  implementing more than 250 integration solutions to meet
                  business needs using IBM Integration Bus and its utilities.
                </li>
                <li>
                  • Implemented DevOps automations around Middleware
                  architecture on a production scale using tools - Jenkins,
                  Bitbucket, Jira, Puppet, SonarQube and Sonatype Nexus tools
                  resulting in savings of 50% deployment times and reduction of
                  manual errors.
                </li>
                <li>
                  • Planned and executed user management schemes with the
                  integration of Azure-AD, LDAP with Devops tools, Service Now,
                  Jira and Deployment environments (Cloud and Local Servers),
                  successfully managing around 200 users.
                </li>
                <li>
                  • Successfully migrated more than 2000 repositories from CVS
                  to Bitbucket along with their 10 to 15 years of commit
                  histories using shell scripting.
                </li>
                <li>
                  • Designed various strategies for automations and persuaded
                  them by creating multiple CI/CD pipelines using Groovy, Ant
                  and Shell scripts reducing manual efforts by more than 50%.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
