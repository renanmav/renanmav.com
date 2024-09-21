import Link from "app/components/link";

import Divider from "./divider";

function Bold({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold">{children}</strong>;
}

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
        Individual Contributor on the{" "}
        <Link href="https://www.coinbase.com/wallet">Coinbase Wallet</Link>{" "}
        team, building one of the best self-custody wallets for managing digital
        assets.
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
      <p key="1">
        Primarily a <Bold>product frontend role</Bold>, with some backend
        development when needed.
      </p>,
      <p key="2">
        Joined to <Bold>rewrite the previous native app</Bold> called "Toshi
        wallet" to a <Bold>revamped app in React Native</Bold>.
      </p>,
      <p key="3">
        Worked on the onboarding flow using{" "}
        <Bold>multi-language mnemonics (BIP-39)</Bold>,
        <Bold>decentralized identity (.cb.id)</Bold>,{" "}
        <Bold>Coinbase account &harr; Wallet connection</Bold>, and more.
      </p>,
      <p key="4">
        Currently working on Ramps squad,{" "}
        <Bold>
          building the buy flow aggregating multiple payment providers
        </Bold>{" "}
        on{" "}
        <Link href="https://apps.apple.com/us/app/coinbase-wallet-nfts-crypto/id1278383455">
          mobile
        </Link>
        ,{" "}
        <Link href="https://chromewebstore.google.com/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad?hl=en&source=wallet_coinbase_com&_branch_match_id=1360354476970338567&_branch_referrer=H4sIAAAAAAAAAyXIQQqAIBAAwNfULY2OgXToIaLrpoK6sWv4/YJuw6Teb9m1jqTAL0MBVT1cKdiXQKMVcuEQehjQ/G2BcvNO8EOdp21lvJA5t2g90xBkcyamii8nNN0uWgAAAA%3D%3D&pli=1">
          extension
        </Link>
        , <Link href="https://wallet.coinbase.com">dapp</Link> and{" "}
        <Link href="https://www.coinbase.com/wallet/smart-wallet">
          smart contract wallet
        </Link>
        .
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
    highlights: [
      <p key="1">
        As <Bold>one of the first hires</Bold>, played an instrumental role in{" "}
        <Bold>definition of app architecture and quality standards</Bold>.
      </p>,
      <p key="2">
        Contributed to the <Bold>core features of the app</Bold> (onboarding,
        KYC, statement, cards, Pix), focusing on user experience, reliability
        and performance.
      </p>,
      <p key="3">
        Maintained a <Bold>close relationship with founders</Bold>.
      </p>,
      <p key="4">
        Went through <Bold>YCombinator @ W21 batch</Bold>, where I learned a lot
        about startups and the Valley culture.
      </p>,
    ],
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
        Software House Experience. Contributed to the development of{" "}
        <Link href="https://www.confy.app">Confy</Link>, SaaS designed to help
        organize tech meetups.
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
    highlights: [
      <p key="1">
        Started working remotely from{" "}
        <Link
          href="https://www.google.com/maps/place/Palmas,+State+of+Tocantins"
          className="!text-black hover:no-underline"
        >
          Palmas, TO
        </Link>{" "}
        (hometown).
      </p>,
      <p key="2">
        Transitioned to a hybrid work model,{" "}
        <Bold>relocating to the city of the company's office</Bold>.
      </p>,
      <p key="3">
        Implemented <Bold>social login with Google, Facebook and GitHub</Bold>{" "}
        as the first end-to-end workstream.
      </p>,
      <p key="4">Partnered with design peer on multiple sessions.</p>,
      <p key="5">
        <Bold>Deployed a serverless server-side-rendered architecture</Bold>{" "}
        through AWS Lambda, API Gateway, CDN and AWS CDK.
      </p>,
      <p key="6">
        <Bold>Supported third-party clients</Bold> with agile methodology.
      </p>,
    ],
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
      <h2 className="hidden basis-1/2 font-bold uppercase md:block">Highlights</h2>
    </div>
  );
}

function Experience({ experience }: { experience: WorkExperience }) {
  return (
    <div className="md:grid md:grid-cols-2">
      {/* Left column */}
      <div className="flex flex-col md:pr-4">
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
      <div className="mt-2 pl-4 md:mt-0 md:pl-0">
        <ul className="list-disc">
          {experience.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
