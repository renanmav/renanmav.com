import Link from "app/components/Link";
import { myInfo } from "app/constants";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

export default function ContactList() {
  const contacts = [
    {
      name: "Email",
      link: `mailto:${myInfo.email}`,
      value: myInfo.email,
      icon: <FaEnvelope />,
    },
    {
      name: "LinkedIn",
      link: myInfo.linkedin,
      value: myInfo.linkedin,
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      link: myInfo.github,
      value: myInfo.github,
      icon: <FaGithub />,
    },
    {
      name: "Twitter",
      link: myInfo.twitter,
      value: myInfo.twitter,
      icon: <FaTwitter />,
    },
  ];

  return (
    <div className="mb-8">
      {contacts.map((contact) => (
        <p
          key={contact.name}
          className="flex flex-row items-center gap-1 text-base"
        >
          {contact.icon} {contact.name}:{" "}
          <Link href={contact.link} openInNewTab>
            {contact.value}
          </Link>
        </p>
      ))}
    </div>
  );
}
