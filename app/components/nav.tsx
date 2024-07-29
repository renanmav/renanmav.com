import Image from "next/image";

export function Navbar() {
  return (
    <header className="mb-8 flex flex-row">
      <div className="flex grow flex-row items-center" id="nav-left">
        <a
          rel="author"
          href="/"
          className="flex flex-row items-center font-semibold"
        >
          <Image
            src="/habbo-pfp.png"
            width={30}
            height={30}
            alt="Picture of the author"
            className="mr-2 size-8 rounded-full object-cover"
          />
          Renan Mav
        </a>
      </div>

      <div className="flex flex-row items-center" id="nav-right">
        <span>Theme</span>
      </div>
    </header>
  );
}
