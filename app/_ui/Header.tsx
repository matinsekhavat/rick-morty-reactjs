import Image from "next/image";
import Input from "./Input";

function Header() {
  return (
    <header className="h-20 container-fluid bg-slate-500 flex items-center justify-between my-4 rounded-xl">
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
          <Input />
        </div>
      </div>
      <div>
        <span>heart</span>
      </div>
    </header>
  );
}

export default Header;
