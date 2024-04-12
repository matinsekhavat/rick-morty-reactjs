import React, { createContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { useContext } from "react";

const CharacterContext = createContext();

const INITIAL_STATE = {
  characters: [],
  isLoading: false,
  character: null,
  favourites: [],
  errorMessage: "",
  isFavModalOpen: false,
  query: "",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "startLoading": {
      return { ...state, isLoading: true };
    }
    case "charactersLoad": {
      console.log(payload);
      return { ...state, characters: payload };
    }
    case "finishLoading": {
      return { ...state, isLoading: false };
    }
    case "selectedCharacter": {
      return {
        ...state,
        character: payload.id === state.character?.id ? null : payload,
      };
    }
    case "addToFav": {
      return { ...state, favourites: [...state.favourites, payload] };
    }
    case "fetchingError": {
      return { ...state, errorMessage: payload };
    }
    case "favModal": {
      return { ...state, isFavModalOpen: true };
    }
    case "searchCharacters": {
      return { ...state, query: payload };
    }
    case "searchBackToDefault": {
      return { ...state, characters: [] };
    }
    case "resetError": {
      return { ...state, errorMessage: "" };
    }
  }
}

function CharacterProvider({ children }) {
  const controller = new AbortController();
  const signal = controller.signal;

  // define and set useReducer
  const [
    {
      characters,
      isLoading,
      character,
      favourites,
      errorMessage,
      isFavModalOpen,
      query,
    },
    dispatch,
  ] = useReducer(reducer, INITIAL_STATE);

  //   get Characters From Api

  useEffect(() => {
    async function fetchCharacters() {
      dispatch({ type: "resetError" });
      if (query.length < 3) return dispatch({ type: "searchBackToDefault" });
      try {
        dispatch({ type: "startLoading" });
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${query}`,
          { signal }
        );
        const data = await res.json();

        if (!res.ok) throw new Error(data.error);
        dispatch({ type: "charactersLoad", payload: data.results.slice(0, 5) });
      } catch (error) {
        dispatch({ type: "fetchingError", payload: error.message });
      } finally {
        dispatch({ type: "finishLoading" });
      }
      controller.abort();
    }
    fetchCharacters();
  }, [query]);
  console.log(characters);
  return (
    <CharacterContext.Provider
      value={{
        characters,
        isLoading,
        dispatch,
        character,
        favourites,
        errorMessage,
        isFavModalOpen,
        query,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

function useCharacterContext() {
  const context = useContext(CharacterContext);
  if (context == undefined)
    throw new Error("cant access this context at this area");
  return context;
}

export { useCharacterContext, CharacterProvider };
