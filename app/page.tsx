import React from "react";
import CharactersList from "./_ui/CharactersList";

function page() {
  return (
    <div
      className="container-fluid grid grid-cols-1 sm:grid-cols-2
    "
    >
      <CharactersList />
    </div>
  );
}

export default page;
