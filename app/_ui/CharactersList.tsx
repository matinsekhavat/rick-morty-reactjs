import CharactersItem from "./CharactersItem";
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface CharactersListProps {
  characters: Character[];
}

async function CharactersList({ characters }: CharactersListProps) {
  return (
    <div className="space-y-2">
      {characters.map((character) => (
        <CharactersItem key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharactersList;
