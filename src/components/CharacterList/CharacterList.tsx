import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import CharacterRow from "./CharacterRow";

export default function CharacterList() {
  const { characterListForSearch } = useContext(GlobalContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <table>
        <thead>
          <tr>
            {[
              "character",
              "tags",
              "power",
              "mobility",
              "technique",
              "surviviblity",
              "energy",
            ].map((header, index) => (
              <td
                key={header + index}
                style={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                <h3>{header}</h3>
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {characterListForSearch.map((character, index) => {
            return <CharacterRow key={character.name + index} {...character} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
