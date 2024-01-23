import { useContext } from "react";
import "./App.css";
import Abilities from "./components/Abilities/Abilities";
import Title from "./components/Title/Title";
function App() {

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
    </main>
  );
}

export default App;
