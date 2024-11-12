import Link from "app/components/Link";
import { myInfo } from "app/constants";

export default function NowPage() {
  return (
    <section>
      <Title />
      <IAm
        question="Where am I living?"
        answer={`I'm currently living in ${myInfo.address}`}
      />
      <IAm
        question="Where am I working?"
        answer="I'm not working at the moment. I'm actively looking for a job."
      />
      <IAm
        question="What am I coding?"
        answer={
          <p className="text-base">
            I'm contributing to <Link href="https://useliquid.xyz">Liquid</Link>{" "}
            from Supermigrate & MetastableLabs.
          </p>
        }
      />
      <IAm
        question="What am I learning?"
        answer={
          <p className="text-base">
            I'm learning about <em>Golang</em> for backend development,
            specifically the{" "}
            <Link href="https://goexpert.fullcycle.com.br/pos-goexpert">
              GoExpert
            </Link>{" "}
            course from Fullcycle.
          </p>
        }
      />
      <IAm
        question="What am I reading?"
        answer={
          <p className="text-base">
            The Pragmatic Programmer by Andrew Hunt and David Thomas.
          </p>
        }
      />
    </section>
  );
}

function Title() {
  return (
    <div className="mb-8">
      <h1 className="text-xl font-semibold">
        now. <em className="text-sm font-light">or never.</em>
      </h1>
      <span className="text-xs font-normal text-gray-400">
        Last updated on{" "}
        {new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
    </div>
  );
}

type IAmProps = {
  question: string;
  answer: string | React.ReactNode;
};

function IAm({ question, answer }: IAmProps) {
  return (
    <div className="mb-8">
      <h2 className="mb-2 text-base font-semibold">{question}</h2>
      {typeof answer === "string" ? (
        <p className="text-base">{answer}</p>
      ) : (
        answer
      )}
    </div>
  );
}
