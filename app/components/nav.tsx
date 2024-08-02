import { myInfo } from "app/constants";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="mb-8 flex flex-row">
      <div className="flex grow flex-row items-center" id="nav-left">
        <Link
          href="/"
          className="flex flex-row items-center text-base font-semibold"
        >
          <Image
            src="/habbo-pfp.png"
            width={30}
            height={30}
            alt="Picture of the author"
            className="mr-2 size-8 rounded-full object-cover"
          />
          {myInfo.name}
        </Link>
      </div>

      <div className="flex flex-row items-center" id="nav-right">
        {/* TODO: implement dark mode */}
        {/* <span>Theme</span> */}
      </div>
    </header>
  );
}
