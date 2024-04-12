import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useCharacterContext } from "../context/CharacterContext";
function Navbar() {
  const { characters, favourites, dispatch, query } = useCharacterContext();
  return (
    <div className="navbar">
      <div className="navbar__logo">Logo</div>
      <input
        type="text"
        name=""
        id=""
        className="text-field"
        placeholder="Search..."
        value={query}
        onChange={(e) =>
          dispatch({ type: "searchCharacters", payload: e.target.value })
        }
      />
      <div className="navbar__result">Found {characters.length} character </div>
      <button className="heart" onClick={() => dispatch({ type: "favModal" })}>
        <HeartIcon className="icon" />
        <span className="badge">{favourites.length}</span>
      </button>
    </div>
  );
}

export default Navbar;
