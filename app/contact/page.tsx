import Image from "next/image";

import Link from "app/components/link";
import { myInfo } from "app/constants";

export const metadata = {
  title: "Contact",
  description: "Contact me.",
};

export default function ContactPage() {
  return (
    <section>
      <h1 className="mb-8 text-base font-semibold">Hit me up anywhere</h1>

      {/* TODO: fix this for small screen devices iPhone SE */}
      <div className="relative">
        <Image
          src="/renanmav.png"
          alt="Picture of Renan Mav (me)"
          width={300}
          height={300}
        />
        <Image
          src="/arrow-pointing-at-me.svg"
          alt="Arrow pointing at Renan Mav (me)"
          width={100}
          height={100}
          className="absolute left-[250px] top-[270px]"
        />
        <p className="absolute left-[350px] top-[330px] text-base font-semibold">
          yup, that&apos;s me!
        </p>
      </div>

      <p className="my-4 text-base">I&apos;d prefer email tho :P</p>

      <p className="text-base">
        Email:{" "}
        <Link href={`mailto:${myInfo.email}`} target="_blank" rel="noopener">
          {myInfo.email}
        </Link>
      </p>
      <p className="text-base">
        LinkedIn:{" "}
        <Link href={myInfo.linkedin} target="_blank" rel="noopener">
          {myInfo.linkedin}
        </Link>
      </p>
      <p className="text-base">
        GitHub:{" "}
        <Link href={myInfo.github} target="_blank" rel="noopener">
          {myInfo.github}
        </Link>
      </p>
      <p className="text-base">
        Instagram:{" "}
        <Link href={myInfo.instagram} target="_blank" rel="noopener">
          {myInfo.instagram}
        </Link>
      </p>
      <p className="text-base">
        Telegram:{" "}
        <Link href={myInfo.telegram} target="_blank" rel="noopener">
          {myInfo.telegram}
        </Link>
      </p>
      <p className="text-base">
        WhatsApp:{" "}
        <Link
          href={`https://wa.me/${myInfo.phone.replace(/[\s-]/g, "")}?text=hey`}
          target="_blank"
          rel="noopener"
        >
          {myInfo.phone}
        </Link>
      </p>
    </section>
  );
}
