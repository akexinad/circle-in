import { useContext } from "react";
import { Character } from "../../types";
import { GlobalContext } from "../../context/GlobalContext";

export default function SelectedCharacter({
  character,
}: {
  character: Character;
}) {
  const { removeSelectedCharacter } = useContext(GlobalContext);

  return (
    <img
      height={100}
      style={{
        borderRadius: "50%",
      }}
      src={character.image}
      alt={character.name}
      onClick={() => removeSelectedCharacter(character.name)}
    />
  );
}
