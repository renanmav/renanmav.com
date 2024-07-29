import Link from "next/link";

import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <p className="mb-4">
        I live in Brazil 🇧🇷 and work as a software enginner at Coinbase.
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
        <Link href="mailto:me@renanmav.com">me@renanmav.com</Link>. Also find me
        on <Link href="https://x.com/renanmav">Twitter</Link> and{" "}
        <Link href={"https://github.com/renanmav"}>GitHub</Link>.
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
