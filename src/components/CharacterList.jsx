import { EyeIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useCharacterContext } from "../context/CharacterContext";
import Spinner from "./Spinner";

function CharacterList() {
  const { characters, isLoading, errorMessage } = useCharacterContext();
  //   console.log(useCharacterContext());
  return (
    <div className="characters-list">
      {isLoading ? (
        <Spinner />
      ) : errorMessage.length ? (
        <h1 className="white">{errorMessage}</h1>
      ) : (
        <>
          {characters.map((item) => (
            <CharacterItem key={item.id} item={item} />
          ))}
        </>
      )}
    </div>
  );
}

function CharacterItem({ item }) {
  const { dispatch } = useCharacterContext();

  return (
    <div className="list__item">
      <img src={item.image} alt="" />

      <h3 className="name">
        <span>{item.gender === "Male" ? "👨🏻" : "👩🏻"}</span>
        <span>{item.name}</span>
      </h3>
      <div className="list-item__info info ">
        <span
          className={`status ${item.status === "Dead" ? "red" : ""}`}
        ></span>
        <span>{item.status}</span>
        <span> - {item.species}</span>
      </div>
      <button
        className="icon red"
        onClick={() => dispatch({ type: "selectedCharacter", payload: item })}
      >
        <EyeIcon />
      </button>
    </div>
  );
}

export default CharacterList;
