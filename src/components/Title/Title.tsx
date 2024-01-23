import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function Title() {
  const { selectedCharacters } = useContext(GlobalContext);

  return (
    <h1>
      {selectedCharacters.length
        ? "your champions"
        : "select your squad to defend earthrealm"}
    </h1>
  );
}
