import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function Tag({ tag }: { tag: string }) {
  const [selected, setSelected] = useState(false);
  const { selectedTags, addTag, removeTag } = useContext(GlobalContext);

  const handleClick = (tagText: string) => {
    selected === false ? addTag(tagText) : removeTag(tagText);
    setSelected((prevState) => !prevState);
  };

  return (
    <button
      style={{
        backgroundColor: selectedTags.indexOf(tag) !== -1 ? "blue" : "white",
      }}
      onClick={(e) => handleClick((e.target as HTMLElement).innerText)}
    >
      {tag}
    </button>
  );
}
