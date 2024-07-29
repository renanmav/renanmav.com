import Link from "next/link";

import { BlogPosts } from "app/components/posts";
import { myInfo } from "./constants";

export default function Page() {
  return (
    <section>
      <p className="mb-4">
        I live in {myInfo.address} and work as a software enginner at{" "}
        {myInfo.company}.
      </p>

      <p className="mb-4">
        I&apos;m passionate about design, code quality, fullstack development
        and open-source. I have a particular interest in mobile technologies and
        building apps that are delightful to use.
      </p>
      <p className="mb-4">
        I consider myself an artist at heart, consistently polishing my
        creations and looking for my masterpiece. I also enjoy cars and
        racing/drifting them.
        {/* TODO: Checkout my YouTube channel for some of my sends. */}
      </p>
      <p className="mb-4">
        You can reach me at{" "}
        <Link href={`mailto:${myInfo.email}`}>{myInfo.email}</Link>. Also find
        me on <Link href={myInfo.twitter}>Twitter</Link> and{" "}
        <Link href={myInfo.github}>GitHub</Link>.
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
