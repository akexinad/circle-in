import { useContext, useEffect, useState } from "react";
import { CharacterList } from "../../types";
import { GlobalContext } from "../../context/GlobalContext";

export default function CharacterRow({
  name,
  image,
  tags,
  power,
  mobility,
  technique,
  survivability,
  energy,
}: CharacterList) {
  const { addSelectedCharacter, removeSelectedCharacter, selectedCharacters } =
    useContext(GlobalContext);

  const [checked, setChecked] = useState(
    selectedCharacters.some((char) => char.name === name)
  );

  useEffect(() => {
    setChecked(selectedCharacters.some((char) => char.name.toLowerCase() === name));

  }, [selectedCharacters, name]);

  const calculateColour = (ability: number) =>
    ability === 10 ? "red" : "black";

  const handleClick = () => {
    const result = checked
      ? removeSelectedCharacter(name)
      : addSelectedCharacter(name);

    setChecked(result);
  };

  return (
    <tr>
      <td>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <input type="checkbox" onChange={handleClick} checked={checked} />
          <p>{name}</p>
          {/* <img
            height={40}
            style={{
              borderRadius: "50%",
            }}
            src={image}
            alt={name}
          /> */}
        </div>
      </td>
      <td>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          {tags.map((tag, index) => (
            <p key={name + tag + index}>{tag}</p>
          ))}
        </div>
      </td>
      {[power, mobility, technique, survivability, energy].map(
        (ability, index) => {
          return (
            <td
              key={name + index}
              style={{
                color: calculateColour(ability),
              }}
            >
              {ability}
            </td>
          );
        }
      )}
    </tr>
  );
}
