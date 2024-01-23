import { useContext } from "react";
import "./App.css";
import Abilities from "./components/Abilities/Abilities";
import CharacterList from "./components/CharacterList/CharacterList";
import Tags from "./components/Tags/Tags";
import Title from "./components/Title/Title";
import { GlobalContext } from "./context/GlobalContext";
import type { AbilityName } from "./types";
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
      <Abilities abilityAverages={mockAbilityAverages} />
      <Tags tags={allTags} />
      <CharacterList />
    </main>
  );
}

export default App;
