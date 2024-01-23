export type AbilityName =
  | "Mobility"
  | "Technique"
  | "Survivability"
  | "Power"
  | "Energy";

export interface CharacterAbility {
  abilityName: AbilityName;
  abilityScore: number;
}

export interface CharacterTag {
  slot: number;
  tag_name: string;
}

export interface Character {
  id: number;
  name: string;
  quote: string;
  image: string;
  thumbnail: string;
  universe: string;
  abilities: CharacterAbility[];
  tags: CharacterTag[];
}

export interface CharacterList {
  name: string;
  image: string;
  tags: string[];
  power: number;
  mobility: number;
  technique: number;
  survivability: number;
  energy: number;
}

export interface GlobalContext {
  allTags: string[];
  selectedTags: string[];
  selectedCharacters: Character[];
  characters: Character[];
  serverError: string;
  characterList: CharacterList[];
  characterListForSearch: CharacterList[];
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
  clearAllSelectedTags: () => void;
  addSelectedCharacter: (name: string) => boolean;
  removeSelectedCharacter: (name: string) => boolean;
  filterCharacterListBySearch: (value: string) => void;
}
