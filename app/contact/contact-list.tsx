import Link from "app/components/link";
import { myInfo } from "app/constants";

export default function ContactList() {
  return (
    <div>
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
    </div>
  );
}
