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
        answer={
          <p className="text-base">
            I'm working at <Link href="https://margelo.com">Margelo</Link> as a
            React Native developer.
          </p>
        }
      />
      <IAm
        question="What am I coding?"
        answer={
          <p className="text-base">
            I'm contributing to{" "}
            <Link href="https://x.com/getliquidapp">Liquid</Link> from
            Supermigrate & MetastableLabs.
          </p>
        }
      />
      <IAm
        question="What am I learning?"
        answer={
          <div className="space-y-2">
            <p className="text-base">
              I'm learning about <em>Golang</em> for backend development,
              through the postgraduate course{" "}
              <Link href="https://goexpert.fullcycle.com.br/pos-goexpert">
                GoExpert
              </Link>{" "}
              from Fullcycle.
            </p>
            <p className="text-base">
              I'm learning <em>Swift</em> and <em>Kotlin</em> to better
              understand native mobile development and improve my React Native
              skills by knowing what happens under the hood.
            </p>
            <p className="text-base">
              I'm learning about <em>animations in React Native</em>, exploring
              the Reanimated library to create fluid and performant animations.
            </p>
          </div>
        }
      />
      <IAm
        question="What am I reading?"
        answer={
          <p className="text-base">
            <Link href="https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition">
              The Pragmatic Programmer
            </Link>{" "}
            by Andrew Hunt and David Thomas.
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
