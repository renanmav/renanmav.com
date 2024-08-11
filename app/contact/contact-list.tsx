import Link from "app/components/link";
import { myInfo } from "app/constants";

export default function ContactList() {
  const contacts = [
    {
      name: "Email",
      link: `mailto:${myInfo.email}`,
      value: myInfo.email,
    },
    {
      name: "LinkedIn",
      link: myInfo.linkedin,
      value: myInfo.linkedin,
    },
    {
      name: "GitHub",
      link: myInfo.github,
      value: myInfo.github,
    },
    {
      name: "Instagram",
      link: myInfo.instagram,
      value: myInfo.instagram,
    },
    {
      name: "Telegram",
      link: myInfo.telegram,
      value: myInfo.telegram,
    },
    {
      name: "WhatsApp",
      link: `https://wa.me/${myInfo.phone.replace(/[\s-]/g, "")}?text=hey`,
      value: myInfo.phone,
    },
  ];

  return (
    <div>
      {contacts.map((contact) => (
        <p key={contact.name} className="text-base">
          {contact.name}:{" "}
          <Link href={contact.link} openInNewTab>
            {contact.value}
          </Link>
        </p>
      ))}
    </div>
  );
}
