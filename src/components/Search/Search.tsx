import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function Search() {
  const { filterCharacterListBySearch: filterCharacterList } = useContext(GlobalContext);

  const handleSearch = (value: string) => filterCharacterList(value);

  return (
    <div>
      p<label htmlFor="search"></label>
      <input
        placeholder={"Search character..."}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
