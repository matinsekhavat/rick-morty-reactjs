import { Eye } from "lucide-react";
import Image from "next/image";
import { Character } from "@/app/_ui/CharactersList";
import Button from "./Button";
type character = {
  character: Character;
};
function CharactersItem({ character }: character) {
  return (
    <div className="flex items-center gap-4 justify-between bg-slate-700 p-4  rounded-xl">
      {/* Image */}
      <div className="flex items-center gap-4">
        <div className="rounded-xl overflow-hidden">
          <Image alt="" src={character.image} width={50} height={50} />
        </div>
        {/* Statue */}
        <div>
          <p className="flex items-center gap-2">
            <span>{character.gender === "Male" ? "👨🏻" : "👩🏻"}</span>
            <span>{character.name}</span>
          </p>
          <div className="flex items-center gap-2">
            <span
              className="circle"
              style={{
                backgroundColor: character.status === "Alive" ? "green" : "red",
              }}
            ></span>
            <span>
              {character.status} - {character.gender}
            </span>
          </div>
        </div>
      </div>

      {/* BTN */}
      <Button id={character.id} />
    </div>
  );
}

export default CharactersItem;
