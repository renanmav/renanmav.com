import Head from "./head";
import PersonalSummary from "./personal-summary";
import Skills from "./skills";
import WorkHistory from "./work-history";

const sections = [Head, PersonalSummary, Skills, WorkHistory];

const Divider = () => (
  <div className="my-4 w-full border-b border-neutral-200 dark:border-neutral-800" />
);

export const metadata = {
  title: "Resume - Renan Mav",
};

export default function CvPage() {
  return (
    <section>
      {sections.map((Section, index) => {
        const isLastItem = index === sections.length - 1;
        return (
          <div key={index}>
            <Section />
            {!isLastItem && <Divider />}
          </div>
        );
      })}
    </section>
  );
}
