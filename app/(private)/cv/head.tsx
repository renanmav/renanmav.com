import Image from "next/image";
import { FaLinkedin, FaGithub, FaLink } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import { myInfo } from "app/constants";
import Link from "app/components/link";

/**
 * Head component for the CV page.
 *
 * Includes my name, job title, photo and contact information
 */
export default function Head() {
  return (
    <section>
      <div className="flex flex-row gap-8">
        <LinkedinPhoto />
        <PersonalInfo />
        <ContactInfo />
      </div>
    </section>
  );
}

function LinkedinPhoto() {
  return (
    <div className="flex basis-1/3">
      <Image
        src="/linkedin.png"
        alt="Renan Mav"
        className="rounded-full object-cover"
        width={800}
        height={800}
      />
    </div>
  );
}

function PersonalInfo() {
  return (
    <div className="flex basis-3/4 flex-col">
      <h1 className="text-lg font-semibold">Renan Mav</h1>
      <p>Senior Software Engineer</p>

      <ul className="mt-2 flex flex-col gap-1">
        <li className="hover:cursor-pointer">
          <Link
            href="https://www.google.com/maps/place/Bras%C3%ADlia,+DF,+Brazil"
            className="!text-black hover:no-underline"
            openInNewTab
          >
            📍 Brasília, DF, Brazil
          </Link>
        </li>
        <li>🌏 Open to work remotely</li>
        <li>🛫 B1/B2 U.S. visa for temporary visits</li>
        <li>🇺🇸 Available for U.S. work visa sponsorship</li>
      </ul>
    </div>
  );
}

const contactList = [
  {
    href: `mailto:${myInfo.email}`,
    text: myInfo.email,
    Icon: SiGmail,
  },
  {
    href: myInfo.linkedin,
    text: myInfo.linkedin.replace("https://", ""),
    Icon: FaLinkedin,
  },
  {
    href: myInfo.github,
    text: myInfo.github.replace("https://", ""),
    Icon: FaGithub,
  },
  {
    href: myInfo.website,
    text: myInfo.website.replace("https://", ""),
    Icon: FaLink,
  },
];

function ContactInfo() {
  return (
    <div className="flex basis-1/4 flex-col items-end gap-1 self-end">
      {contactList.map((contact, index) => (
        <div key={index} className="flex flex-row items-center gap-2">
          <Link href={contact.href}>{contact.text}</Link>
          {contact.Icon && <contact.Icon className="size-5" />}
        </div>
      ))}
    </div>
  );
}
