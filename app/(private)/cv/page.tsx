import Head from "./head";
import PersonalSummary from "./personal-summary";
import Skills from "./skills";
import WorkHistory from "./work-history";
import Divider from "./divider";

const sections = [Head, PersonalSummary, Skills, WorkHistory];

// TODO: Add a way to download the CV as a PDF
// TODO: Add unfurl card for the CV
export const metadata = {
  title: "Resume - Renan Mav",
};

export default function CvPage() {
  return (
    <section className="mx-4 my-5">
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
