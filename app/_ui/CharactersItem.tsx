import { Eye } from "lucide-react";
import Image from "next/image";

function CharactersItem() {
  return (
    <div className="flex items-center gap-4 justify-between bg-slate-700 p-4  rounded-xl">
      {/* Image */}
      <div className="flex items-center gap-4">
        <div>
          <Image alt="" src="/logo.png" width={50} height={50} />
        </div>
        {/* Statue */}
        <div>
          <p>Rick Sanchez</p>
          <div className="flex items-center gap-2">
            <span className="circle green"></span>
            Alive-human
          </div>
        </div>
      </div>

      {/* BTN */}
      <button>
        <Eye color="#d11f34" />
      </button>
    </div>
  );
}

export default CharactersItem;
