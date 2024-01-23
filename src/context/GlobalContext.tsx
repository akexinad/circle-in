import { ReactNode, createContext, useEffect, useState } from "react";
import {
  Character,
  GlobalContext as TGlobalContext,
  CharacterList,
} from "../types";
import { fetchCharacters } from "../data/actions";
import getAllTags from "../utils/getAllTags";
import { generateCharacterList } from "../utils/generateCharacterTable";

const initialState: TGlobalContext = {
  allTags: ["my team"],
  selectedTags: [],
  characters: [],
  selectedCharacters: [],
  serverError: "",
  characterList: [],
  characterListForSearch: [],
  addTag: (_tag: string) => {},
  removeTag: (_tag: string) => {},
  clearAllSelectedTags: () => {},
  addSelectedCharacter: (_name: string) => false,
  removeSelectedCharacter: (_name: string) => false,
  filterCharacterListBySearch: (_value: string) => {},
};

export const GlobalContext = createContext<TGlobalContext>(initialState);

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [allTags, setAllTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [serverError, setServerError] = useState("");
  const [characterList, setCharacterList] = useState<CharacterList[]>([]);
  const [filteredCharacterList, setFilteredCharacterList] = useState<
    CharacterList[]
  >([]);
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetchCharacters(123)
      .then((data) => {
        const characterData = data as Character[];
        setCharacters(characterData);
        setAllTags([...getAllTags(characterData), "my team"]);
        setCharacterList(generateCharacterList(characterData));
        setFilteredCharacterList(generateCharacterList(characterData));
      })
      .catch((error) => {
        // throw new Error('There was error')
        const errorMessage: string = error.message;
        setServerError(errorMessage);
      });
  }, []);

  const addTag = (tag: string) => setSelectedTags([...selectedTags, tag]);

  const removeTag = (tagToRemove: string) => {
    const newState = selectedTags.filter((tag) => tag !== tagToRemove);
    setSelectedTags(newState);
  };

  const clearAllSelectedTags = () => setSelectedTags([]);

  const addSelectedCharacter = (name: string) => {
    const characterToAdd = characters.find(
      (char) => char.name.toLowerCase() === name
    );

    if (characterToAdd) {
      setSelectedCharacters([...selectedCharacters, characterToAdd]);

      return true;
    }

    return false;
  };

  const removeSelectedCharacter = (name: string) => {
    const newState = selectedCharacters.filter(
      (character) => character.name !== name
    );
    setSelectedCharacters(newState);

    return false;
  };

  const filterCharacterListBySearch = (value: string) => {
    if (!value) {
      setFilteredCharacterList(characterList);
    }

    const filteredList = characterList.filter(
      (character) =>
        character.name.includes(value) ||
        character.tags.join(" ").includes(value)
    );

    setFilteredCharacterList(filteredList);
  };

  return (
    <GlobalContext.Provider
      value={{
        allTags,
        selectedTags,
        characters,
        characterList,
        characterListForSearch: filteredCharacterList,
        serverError,
        addTag,
        removeTag,
        clearAllSelectedTags,
        addSelectedCharacter,
        removeSelectedCharacter,
        selectedCharacters,
        filterCharacterListBySearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
