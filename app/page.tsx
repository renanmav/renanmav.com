import { BlogPosts } from "app/components/posts";
import { myInfo } from "./constants";
import Link from "./components/link";

export default function IndexPage() {
  // TODO: add react-intl for translations

  return (
    <section>
      <p className="mb-4 text-base">
        I currently live in {myInfo.address} and work as a software enginner at{" "}
        {myInfo.company}.
      </p>

      <p className="mb-4 text-base">
        I'm passionate about design, code quality, fullstack development and
        making open-source contributions. I have a particular interest in mobile
        technologies and building fast and scalable apps that are easy and
        delightful to use.
      </p>
      {/* TODO: add section about previous work experience */}
      <p className="mb-4 text-base">
        I consider myself an artist at heart, consistently polishing my
        creations and looking for my masterpiece. I also enjoy cars and
        fixing/racing/drifting them. My biggest inspiration of all time are
        Jesus Christ and Ayrton Senna. They taught me to be humble, chase my
        dreams and never give up. 🧎🏻‍➡️🏎️ 🏁
      </p>
      {/* TODO: Checkout my YouTube channel for some of my sends. */}
      <p className="mb-4 text-base">
        If you think we could work together, pair on a specific problem, or just
        chat about life and cars,{" "}
        <Link href="/contact">don't hesitate to reach out.</Link>
      </p>

      <div className="my-8 text-base">
        <BlogPosts />
      </div>
    </section>
  );
}
