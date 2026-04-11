const experience = [
  {
    company: "Amazon",
    role: "Software Development Engineer",
    team: "Ads Marketplace — OACES & Cybertron",
    location: "Seattle, WA",
    duration: "Jun 2024 – Present",
    bullets: [
      "Built backend services generating customer-target lists for global marketing campaigns (Email, UI, WeChat), integrating with downstream Delivery systems.",
      "Modernized legacy services by executing JDK 8→17 migration, enabling full CD pipelines, and migrating Netscaler load balancers to Tardigrade.",
      "Developed the \"Where's My Notification\" (WMN) dashboard using Amazon Quicksight, Redshift, and Kinesis, reducing notification-related support tickets by 40%+.",
      "Resolved a Sev2 DynamoDB hot partition incident by redesigning key access patterns and introducing caching to restore availability under load.",
      "Built Cybertron, an LLM-based Text-to-SQL platform, with a React + TypeScript + Cloudscape frontend and Java (Smithy, API Gateway, ALB, ECS) backend using DynamoDB and S3.",
      "Designed Phase-2 middleware integrating Bedrock AgentCore via asynchronous prompt processing and wrote the high-level design for migrating from polling to WebSocket-based token streaming.",
    ],
  },
  {
    company: "Amazon Web Services",
    role: "Software Development Engineer",
    team: "Redshift Serverless",
    location: "Seattle, WA",
    duration: "Jul 2023 – Jun 2024",
    bullets: [
      "Built core components of Online Failover, enabling usage-based billing by orchestrating pause/resume workflows for underlying compute infrastructure.",
      "Implemented jitter-based idle detection (±10%) to prevent artificial heartbeat pings and enforce accurate compute billing.",
      "Optimized the Deep Resume workflow by parallelizing recovery stages, reducing cold-start latency by approximately 40–50 seconds.",
      "Designed and launched a Priority-Based Patching system, reducing clusters lagging more than three engine versions behind by 99%.",
      "Served as primary oncall for failover workflows, owning p99 latency monitoring, regression analysis, and cross-service incident resolution.",
    ],
  },
  {
    company: "Florida Power & Light (FPL)",
    role: "DevOps Engineer",
    team: "",
    location: "Remote, USA",
    duration: "Apr 2023 – Jul 2023",
    bullets: [
      "Automated deployments using GitHub Actions and performed bi-weekly production releases across multiple environments.",
      "Upgraded infrastructure from AWS CDK v1 to v2 and updated Docker runtime versions; authored migration and troubleshooting documentation.",
      "Built and maintained AWS infrastructure using CDK, including IAM, S3, DynamoDB, CloudFront, VPC, ALB, and API Gateway.",
    ],
  },
  {
    company: "Accenture",
    role: "Software Engineer",
    team: "",
    location: "Hyderabad, India",
    duration: "Mar 2018 – Jul 2021",
    bullets: [
      "Led DevOps automation and CI/CD initiatives for enterprise clients, mentoring a team of 5 DevOps engineers.",
      "Developed Python, Shell, and Groovy automation tooling including active-user detection scripts that reduced Bitbucket licensing costs by 50%.",
      "Delivered 250+ integration solutions using IBM Integration Bus and MuleSoft, and deployed 300+ APIs and applications to production.",
      "Automated migration of 2,000+ repositories from CVS to Bitbucket with full commit history preserved.",
    ],
  },
];

export default experience;
