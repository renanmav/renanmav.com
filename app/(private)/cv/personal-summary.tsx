export default function PersonalSummary() {
  return (
    <section className="flex flex-col gap-2">
      <PastExperience />
      <Mission />
      <HardAndSoftSkills />
    </section>
  );
}

function Bold({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold">{children}</strong>;
}

function PastExperience() {
  return (
    <p>
      I'm a pragmatic fullstack software engineer with over <Bold>6 years</Bold>{" "}
      of experience, specializing in{" "}
      <Bold>development for web and mobile platforms at scale</Bold>. I can also{" "}
      <Bold>understand and craft backend systems</Bold>. I have been working
      remotely for U.S. companies for 3 years.
    </p>
  );
}

function Mission() {
  return (
    <p>
      My mission is to{" "}
      <Bold>
        deliver software that has a business impact with focus and onwership
      </Bold>
      . I enjoy being involved in the full application development lifecycle,
      from conception and implementation to deployment, maintenance and
      monitoring.
    </p>
  );
}

function HardAndSoftSkills() {
  return (
    <p>
      I write <Bold>high quality, well-tested code</Bold> that follows security
      best practices. I translate business requirements into technical
      specifications, fostering{" "}
      <Bold>clear communication and efficient execution</Bold>.
    </p>
  );
}
