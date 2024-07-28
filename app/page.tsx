import React from "react";
import CharactersList from "./_ui/CharactersList";

export const revalidate = 0;

async function Page({
  searchParams,
}: {
  searchParams: { name: string; characterId: string };
}) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?name=${searchParams?.name || ""}`
  );
  const data = await res.json();

  return (
    <div className="container-fluid grid grid-cols-1 sm:grid-cols-2">
      <CharactersList characters={data.results?.slice(0, 5) || []} />
      {searchParams.characterId && <p>CARD</p>}
    </div>
  );
}

export default Page;
