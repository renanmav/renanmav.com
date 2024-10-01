import { BlogPosts } from "app/components/posts";
import { myInfo } from "app/constants";
import Link from "app/components/link";

export default function IndexPage() {
  return (
    <section>
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

function MeNowadays() {
  // TODO: add /now page and reference it here
  return (
    <p id="me-nowadays" className="mb-4 text-base">
      I am currently living in {myInfo.address} and working as a software
      enginner at {myInfo.company}.
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
      fixing/racing/drifting them. My biggest inspirations of all time are my
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
