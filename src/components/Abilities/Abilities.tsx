import { AbilityName } from "../../types";
import Ability from "../Ability/Ability";

export default function Abilities({
  abilityAverages,
}: {
  abilityAverages: { [key in AbilityName]: number };
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {Object.entries(abilityAverages).map(
        ([abilityName, abilityAverage], index) => (
          <Ability
            key={abilityName + index}
            name={abilityName}
            average={abilityAverage}
          />
        )
      )}
    </div>
  );
}
