import Image from "next/image";

function Header() {
  return (
    <header className="h-20 container-fluid bg-slate-500 flex items-center justify-between">
      {/* Left side */}
      {/* Logo */}
      <div className="flex items-center gap-4">
        <div className="size-16 relative">
          <Image
            src="/logo.png"
            fill
            alt="Rick and morty Logo"
            className="object-covere"
          />
        </div>
        {/* Search Bar */}
        <div className=" transition-all w-auto">
          <input
            type="text"
            placeholder="Search For Characters"
            className="px-4 py-2 rounded-md outline-none border-none w-24 focus:w-52 transition-all focus:outline-4 outline-offset-0 focus:outline-slate-700"
          />
        </div>
      </div>
      <div>
        <span>heart</span>
      </div>
    </header>
  );
}

export default Header;
