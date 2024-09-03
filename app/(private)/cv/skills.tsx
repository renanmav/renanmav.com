type Skill = {
  name: string;
  years?: number;
};

const skills: Skill[] = [
  { name: "TypeScript + React.js / React Native + Node.js", years: 6 },
  { name: "Go/Golang", years: 2 },
  { name: "Docker" },
  { name: "REST" },
  { name: "GraphQL" },
  { name: "gRPC" },
  { name: "AWS" },
  { name: "Github Actions (CI/CD)" },
  { name: "Solidity + Foundry" },
  { name: "Next.js + Vercel" },
  { name: "SSR / CSR / SSG" },
  { name: "wagmi / ethers.js / web3.js" },
  { name: "Design Systems (Storybook, Tailwind)" },
];

const SKILL_SEPARATOR = "⇥";

export default function Skills() {
  return (
    <section className="flex flex-row flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill.name} className="font-semibold">
          {SKILL_SEPARATOR} {skill.name}{" "}
          <span className="text-sm font-normal italic">
            {skill.years && `[${skill.years}yrs]`}
          </span>
        </span>
      ))}
    </section>
  );
}
