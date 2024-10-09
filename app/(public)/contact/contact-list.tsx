import Link from "app/components/link";
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
    {
      name: "Instagram",
      link: myInfo.instagram,
      value: myInfo.instagram,
      icon: <FaInstagram />,
    },
    {
      name: "Telegram",
      link: myInfo.telegram,
      value: myInfo.telegram,
      icon: <FaTelegram />,
    },
    {
      name: "WhatsApp",
      link: `https://wa.me/${myInfo.phone.replace(/[\s-]/g, "")}?text=hey`,
      value: myInfo.phone,
      icon: <FaWhatsapp />,
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
