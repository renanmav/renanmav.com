import Image from "next/image";

export function Navbar() {
  return (
    <header className="flex flex-row mb-8">
      <div className="flex flex-row items-center grow" id="nav-left">
        <a rel="author" href="/" className="flex flex-row items-center">
          <Image
            src="/habbo-pfp.png"
            width={30}
            height={30}
            alt="Picture of the author"
            className="w-8 h-8 rounded-full mr-2 object-cover"
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
