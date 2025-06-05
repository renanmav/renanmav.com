import Link from "app/components/Link";
import { myInfo } from "app/constants";

/**
 * Everytime this is updated, also remember to update last updated date in the title below.
 */
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
          <div className="space-y-2">
            <p className="text-base">
              I'm working at <Link href="https://margelo.com">Margelo</Link> as
              a React Native developer. More specifically, in{" "}
              <Link href="https://www.lava.xyz">Lava</Link>.
            </p>
            <p className="text-base"></p>
          </div>
        }
      />
      <IAm
        question="What am I coding?"
        answer={
          <div className="space-y-2">
            <p className="text-base">
              I'm contributing to the rewrite of the{" "}
              <Link href="https://github.com/margelo/react-native-quick-crypto">
                react-native-quick-crypto
              </Link>{" "}
              library to Nitro Module.
            </p>
          </div>
        }
      />
      <IAm
        question="What am I learning?"
        answer={
          <div className="space-y-2">
            <p className="text-base">
              <em>Rust</em> and <em>BDK</em> (Bitcoin Development Kit) to
              understand Bitcoin development at a lower level and build more
              secure applications.
            </p>
            <p className="text-base">
              <em>Animations in React Native</em>, exploring the Reanimated &
              Skia libraries to create fluid and performant animations.
            </p>
            <p className="text-base">
              <em>Golang</em> for backend development, through the postgraduate
              course{" "}
              <Link href="https://goexpert.fullcycle.com.br/pos-goexpert">
                GoExpert
              </Link>{" "}
              from Fullcycle.
            </p>
          </div>
        }
      />
      <IAm
        question="What am I reading?"
        answer={
          <div className="space-y-2">
            <p className="text-base">
              <Link href="https://www.amazon.com/Mastering-Bitcoin-Programming-Open-Blockchain/dp/1491954388">
                Mastering Bitcoin: Programming the Open Blockchain
              </Link>{" "}
              Third Edition by Andreas M. Antonopoulos and David A. Harding.
            </p>
            <p className="text-base line-through">
              <Link href="https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition">
                The Pragmatic Programmer
              </Link>{" "}
              by Andrew Hunt and David Thomas.
            </p>
          </div>
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
        Last updated on {"June 5, 2025"}
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
