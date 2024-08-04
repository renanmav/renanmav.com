import YupThatsMe from "./yup-thats-me";
import ContactList from "./contact-list";

export const metadata = {
  title: "Contact",
  description: "Please reach out",
};

export default function ContactPage() {
  return (
    <section>
      <h1 className="mb-8 text-base font-semibold">Hit me up anywhere</h1>
      <YupThatsMe />
      <p className="my-4 text-base">I'd prefer email tho :P</p>
      <ContactList />
    </section>
  );
}
