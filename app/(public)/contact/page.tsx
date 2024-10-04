import Link from "app/components/link";

import YupThatsMe from "./yup-thats-me";
import ContactList from "./contact-list";

export const metadata = {
  title: "Contact me",
  description: "Please reach out",
};

export default function ContactPage() {
  return (
    <section>
      <h1 className="mb-4 text-base font-semibold">Shoot me a message 💬</h1>
      <p className="text-base">
        Keep in mind that email communication is preferred.
      </p>
      <p className="mb-4 text-base">
        Also,{" "}
        <Link
          href="https://drive.google.com/file/d/1za5Dwa52EK6TRYqB10Uib3AchAZO-Kv_/view?usp=sharing"
          openInNewTab
        >
          here's a copy of my resume
        </Link>
        .
      </p>
      <ContactList />
      <YupThatsMe />
    </section>
  );
}
