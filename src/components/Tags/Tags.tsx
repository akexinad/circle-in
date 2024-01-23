import { useContext } from "react";
import Tag from "../Tag/Tag";
import { GlobalContext } from "../../context/GlobalContext";

export default function Tags({ tags }: { tags: string[] }) {
  const { clearAllSelectedTags } = useContext(GlobalContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {tags.map((tag, i) => (
        <Tag key={tag + i} tag={tag} />
      ))}
      <button onClick={() => clearAllSelectedTags()}>clear all</button>
    </div>
  );
}
