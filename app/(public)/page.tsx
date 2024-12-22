import BlogPosts from "app/components/Posts";
import Link from "app/components/Link";
import NamePronunciation from "app/components/NamePronunciation";

export default function IndexPage() {
  return (
    <section>
      <Intro />
      <MeNowadays />
      <PassionsAndInterests />
      <PreviousWorkExperience />
      <HobbiesAndInspirations />
      <ReachOut />

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}

function Intro() {
  return (
    <div>
      <p className="mb-4 text-xl font-semibold">Hello 👋😄</p>
      <p className="mb-4 text-base">
        I'm{" "}
        <strong className="inline-flex items-center font-semibold">
          Renan
          <NamePronunciation />
        </strong>
        , a software engineer focused on building delightful user experiences.
      </p>
    </div>
  );
}

function MeNowadays() {
  return (
    <p id="me-nowadays" className="mb-4 text-base">
      Check my <Link href="/now">/now page</Link> to see what I'm doing.
    </p>
  );
}

function PassionsAndInterests() {
  return (
    <p id="passions-and-interests" className="mb-4 text-base">
      I'm passionate about design, code quality, making open-source
      contributions and building in public. I have a particular interest in
      mobile technologies and building fast and scalable apps that are easy and
      delightful to use.
    </p>
  );
}

function PreviousWorkExperience() {
  /* TODO: add section about previous work experience */
  return null;
}

function HobbiesAndInspirations() {
  /* TODO: Checkout my YouTube channel for some of my sends. */
  return (
    <p id="hobbies-and-inspirations" className="mb-4 text-base">
      I consider myself an artist at heart 👨‍🎨❤️, consistently polishing my
      creations and looking for my masterpiece. I also enjoy cars and
      drifting/racing/fixing them. My biggest inspirations of all time are my
      mom&dad, Jesus Christ and Ayrton Senna. They taught me to chase my dreams,
      be humble and never give up. 🙏 🏎️ 🏁
    </p>
  );
}

function ReachOut() {
  return (
    <p id="reach-out" className="mb-4 text-base">
      If you think we could work together, pair on a specific problem, or just
      chat about life and cars,{" "}
      <Link href="/contact">don't hesitate to reach out.</Link>
    </p>
  );
}
