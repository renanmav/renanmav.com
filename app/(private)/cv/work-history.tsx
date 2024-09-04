import Link from "app/components/link";

import Divider from "./divider";

type Company = {
  name: string;
  url: string;
  location: string;
  industry: string;
};

type Role = {
  title: string;
  startDate: string;
  endDate: string;
};

type Tool = {
  name: string;
  bold?: boolean;
};

type WorkExperience = {
  company: Company;
  role: Role;
  description: React.ReactNode;
  tools: Tool[];
  highlights: React.ReactNode[];
};

const history: WorkExperience[] = [
  {
    company: {
      name: "Coinbase",
      url: "https://www.coinbase.com",
      location: "San Francisco, CA (Remote)",
      industry: "Self-custody wallet",
    },
    role: {
      title: "Software Engineer",
      startDate: "jan. 2022",
      endDate: "present",
    },
    description: (
      <p>
        Joined Coinbase Wallet team to build a crypto wallet that allows users
        to manage their digital assets and interact with the blockchain.
      </p>
    ),
    tools: [
      { name: "TypeScript", bold: true },
      { name: "React.js" },
      { name: "React Native", bold: true },
      { name: "React Query", bold: true },
      { name: "Testing Library", bold: true },
      { name: "Node.js" },
      { name: "Webpack" },
      { name: "Ethereum" },
      { name: "Solana" },
      { name: "Bitcoin" },
      { name: "Go/Golang", bold: true },
      { name: "Docker" },
      { name: "REST" },
      { name: "gRPC" },
    ],
    highlights: [],
  },
  {
    company: {
      name: "Z1",
      url: "https://www.z1.app",
      location: "São Paulo, SP (Remote)",
      industry: "Startup",
    },
    role: {
      title: "Software Engineer",
      startDate: "jun. 2020",
      endDate: "jan. 2022",
    },
    description: <p>Early Team Member of Brazilian fintech.</p>,
    tools: [
      { name: "TypeScript", bold: true },
      { name: "React Native", bold: true },
      { name: "Apollo" },
      { name: "GraphQL", bold: true },
      { name: "Node.js", bold: true },
      { name: "AWS" },
      { name: "Docker" },
      { name: "Terraform" },
    ],
    highlights: [],
  },
  {
    company: {
      name: "Foton Tech",
      url: "https://www.confy.app",
      location: "Florianópolis, SC (Hybrid)",
      industry: "Software House / SaaS",
    },
    role: {
      title: "Fullstack Developer",
      startDate: "jul. 2019",
      endDate: "jun. 2020",
    },
    description: (
      <p>
        Software House Experience. Contributed to the development of Confy, SaaS
        designed to help organize tech meetups.
      </p>
    ),
    tools: [
      { name: "TypeScript", bold: true },
      { name: "React.js" },
      { name: "Node.js + Koa", bold: true },
      { name: "SSR" },
      { name: "GraphQL", bold: true },
      { name: "Relay", bold: true },
      { name: "Jest" },
      { name: "AWS Lambda", bold: true },
      { name: "AWS CDK", bold: true },
    ],
    highlights: [],
  },
];

export default function WorkHistory() {
  return (
    <section>
      <Header />
      <Divider />

      {history.map((experience, index) => {
        const isLastItem = index === history.length - 1;
        return (
          <div key={`experience-${index}`}>
            <Experience experience={experience} />
            {!isLastItem && <Divider />}
          </div>
        );
      })}
    </section>
  );
}

function Header() {
  return (
    <div className="mb-2 flex">
      <h2 className="basis-1/2 font-bold uppercase">Work History</h2>
      <h2 className="basis-1/2 font-bold uppercase">Highlights</h2>
    </div>
  );
}

function Experience({ experience }: { experience: WorkExperience }) {
  return (
    <div className="grid grid-cols-2">
      {/* Left column */}
      <div className="flex flex-col gap-0">
        <div className="flex flex-row gap-2">
          <Link
            href={experience.company.url}
            className="font-semibold uppercase"
          >
            {experience.company.name}
          </Link>
          <p className="font-light text-gray-600">
            {experience.company.location}
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <h3 className="font-semibold">{experience.role.title}</h3>
          <span>|</span>
          <p>{experience.company.industry}</p>
        </div>
        <div className="flex flex-row gap-2">
          <p>{experience.role.startDate}</p>
          <span>—</span>
          <p>{experience.role.endDate}</p>
        </div>

        <div className="my-2">{experience.description}</div>

        <ul className="inline-flex flex-wrap">
          {experience.tools.map((tool) => (
            <li
              key={tool.name}
              className={`${tool.bold && "font-semibold"} mr-2`}
            >
              {tool.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Right column */}
      <div>highlights!</div>
    </div>
  );
}
