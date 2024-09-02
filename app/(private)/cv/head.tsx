import Image from "next/image";
import { FaLinkedin, FaGithub, FaGlobeAmericas } from "react-icons/fa";
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
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Renan Mav</h1>
          <p>Software Engineer</p>

          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

function LinkedinPhoto() {
  return (
    <Image
      src="/linkedin.png"
      alt="Renan Mav"
      className="size-40 rounded-full"
      width={800}
      height={800}
    />
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
    Icon: FaGlobeAmericas,
  },
];

function ContactInfo() {
  return (
    <div className="mt-4 flex flex-col gap-1">
      {contactList.map((contact, index) => (
        <div key={index} className="flex flex-row items-center gap-2">
          {contact.Icon && <contact.Icon className="size-5" />}
          <Link href={contact.href} openInNewTab>
            {contact.text}
          </Link>
        </div>
      ))}
    </div>
  );
}
