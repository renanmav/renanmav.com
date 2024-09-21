import Image from "next/image";
import { FaLinkedin, FaGithub, FaLink } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import { myInfo } from "app/constants";
import Link from "app/components/link";

export default function Head() {
  return (
    <section>
      <div className="grid grid-cols-[1fr_3fr] gap-4 md:flex md:flex-row md:items-end md:gap-8">
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
      <p>Software Engineer</p>

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
    href: myInfo.website,
    text: myInfo.website,
    Icon: FaLink,
  },
  {
    href: `mailto:${myInfo.email}`,
    text: myInfo.email,
    Icon: SiGmail,
  },
  {
    href: myInfo.github,
    text: myInfo.github,
    Icon: FaGithub,
  },
  {
    href: myInfo.linkedin,
    text: myInfo.linkedin,
    Icon: FaLinkedin,
  },
];

function ContactInfo() {
  return (
    <div className="col-span-2 flex basis-1/4 flex-row items-end justify-evenly gap-4 self-end md:flex-col md:gap-1">
      {contactList.map((contact, index) => (
        <Link key={index} href={contact.href} className="flex flex-row items-center gap-2">
          <span className="hidden md:block">{contact.text.replace("https://", "")}</span>
          {contact.Icon && <contact.Icon className="size-7 md:size-5" />}
        </Link>
      ))}
    </div>
  );
}
