import React from "react";
// import { episodes } from "../../data/data";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import { useCharacterContext } from "../context/CharacterContext";

function CharacterDetail() {
  const { character, dispatch, favourites } = useCharacterContext();

  const isAddedBefore = favourites.some((item) => item.id === character.id);

  if (!character) return <h1>select a character</h1>;

  return (
    <div style={{ flex: 1 }}>
      <div className="character-detail">
        <img src={character.image} alt="" className="character-detail__img" />
        <div className="character-detail__info">
          <h3 className="name">
            <span>{character.gender === "Male" ? "👨🏻" : "👩🏻"} </span>
            <span>&nbsp;{character.name}</span>
          </h3>
          <div className="info">
            <span
              className={`status ${character.status === "Dead" ? "red" : ""}`}
            ></span>
            <span>&nbsp; {character.status}</span>
            <span>&nbsp;{character.species}</span>
          </div>
          <div className="location">
            <p>Last Known Loaction:</p>
            <p>{character.location.name}</p>
          </div>
          <div className="actions">
            <button
              className="btn btn--primary"
              onClick={() => dispatch({ type: "addToFav", payload: character })}
              disabled={isAddedBefore ? true : false}
            >
              {!isAddedBefore ? "add to Favourites" : "Already Added😍✅"}
            </button>
          </div>
        </div>
      </div>
      <div className="character-episodes">
        <div className="title">
          <h2>List of Episodes:</h2>
          <button>
            <ArrowUpCircleIcon className="icon" />
          </button>
        </div>
        <ul>
          {character?.episode &&
            character?.episode
              ?.map((item, index) => (
                <li key={item.id}>
                  <div className="">
                    {String(index + 1).padStart(2, 0)} {item.episode}:{" "}
                    <strong>{item.name}</strong>
                  </div>
                  <div className="badge badge--secondary">{item.air_date}</div>
                </li>
              ))
              .slice(0, 4)}
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetail;
