import Link from "next/link";

import { BlogPosts } from "app/components/posts";
import { myInfo } from "./constants";

export default function Page() {
  return (
    <section>
      <p className="mb-4 text-base">
        I live in {myInfo.address} and work as a software enginner at{" "}
        {myInfo.company}.
      </p>

      <p className="mb-4 text-base">
        I&apos;m passionate about design, code quality, fullstack development
        and open-source. I have a particular interest in mobile technologies and
        building apps that are delightful to use.
      </p>
      <p className="mb-4 text-base">
        I consider myself an artist at heart, consistently polishing my
        creations and looking for my masterpiece. I also enjoy cars and
        racing/drifting them.
        {/* TODO: Checkout my YouTube channel for some of my sends. */}
      </p>
      {/* TODO: move this to contact page */}
      <p className="mb-4 text-base">
        You can reach me at{" "}
        <Link href={`mailto:${myInfo.email}`}>{myInfo.email}</Link>. Also find
        me on <Link href={myInfo.twitter}>Twitter</Link>,{" "}
        <Link href={myInfo.linkedin}>LinkedIn</Link> and{" "}
        <Link href={myInfo.github}>GitHub</Link>.
      </p>

      <div className="my-8 text-base">
        <BlogPosts />
      </div>
    </section>
  );
}
