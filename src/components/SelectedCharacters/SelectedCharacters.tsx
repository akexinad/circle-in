import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import SelectedCharacter from "../SelectedCharacter/SelectedCharacter";

export default function SelectedCharacters() {
  const { selectedCharacters } = useContext(GlobalContext);

  return (
    <div>
      {selectedCharacters.map((character) => (
        <SelectedCharacter key={character.id} character={character} />
      ))}
    </div>
  );
}
