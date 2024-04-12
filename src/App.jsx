import { characters } from "../data/data";
import "./App.css";
import CharacterDetail from "./components/CharacterDetail";
import CharacterList from "./components/CharacterList";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { useCharacterContext } from "./context/CharacterContext";

function App() {
  const { isLoading } = useCharacterContext();
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <CharacterList characters={characters} />
        <CharacterDetail />
      </main>
      <Modal />
    </div>
  );
}

export default App;
