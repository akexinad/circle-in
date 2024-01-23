import { useContext } from "react";
import "./App.css";
import Abilities from "./components/Abilities/Abilities";
import Search from "./components/Search/Search";
import CharacterList from "./components/CharacterList/CharacterList";
import Tags from "./components/Tags/Tags";
import Title from "./components/Title/Title";
import { GlobalContext } from "./context/GlobalContext";
import type { AbilityName } from "./types";
import SelectedCharacters from "./components/SelectedCharacters/SelectedCharacters";

function App() {
  const { allTags } = useContext(GlobalContext);

  const mockAbilityAverages: { [key in AbilityName]: number } = {
    Mobility: 10,
    Technique: 20,
    Survivability: 30,
    Power: 40,
    Energy: 50,
  };

  return (
    <main
      className="App"
      style={{
        margin: "40px",
      }}
    >
      <Title />
      <SelectedCharacters />
      <Abilities abilityAverages={mockAbilityAverages} />
      <Search />
      <Tags tags={allTags} />
      <CharacterList />
    </main>
  );
}

export default App;
