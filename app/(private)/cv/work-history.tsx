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
        Individual Contributor on the Coinbase Wallet team, building one of the
        best self-custody wallets for managing digital assets.
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
    highlights: [
      <p key="1">Primarily a product frontend role.</p>,
      <p key="2">
        Joined to rewrite the previous native self-custody wallet called "Toshi
        wallet" to a revamped app in React Native.
      </p>,
      <p key="3">
        Worked on the onboarding flow using recovery phrases (BIP-39),
        decentralized identity (.cb.id), Coinbase account &harr; Wallet
        connection, and more.
      </p>,
      <p key="4">
        Currently working on Payment squad, creating fiat-to-crypto experiences.
        Building the buy flow aggregating multiple payment providers on mobile,
        extension, dapp and smart contract wallet.
      </p>,
    ],
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
    description: (
      <p>
        Early Team Member of Brazilian fintech serving unbanked Gen-Z youth w/
        Mastercard debit card.
      </p>
    ),
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
    highlights: [<p key="1">A</p>, <p key="2">B</p>, <p key="3">C</p>],
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
    highlights: [<p key="1">A</p>, <p key="2">B</p>, <p key="3">C</p>],
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
      <div className="flex flex-col pr-4">
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
      <div>
        <ul className="list-disc">
          {experience.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
