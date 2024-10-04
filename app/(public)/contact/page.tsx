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
      <p className="mb-4 text-base">
        Keep in mind that email communication is preferred.
      </p>
      <ContactList />
      <YupThatsMe />
    </section>
  );
}
