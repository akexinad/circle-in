import { Character, CharacterList } from "../types";

export const generateCharacterList = (characters: Character[]) =>
  characters.map((character) => {
    const { name, image, tags, abilities } = character;

    return {
      name: name.toLowerCase(),
      image,
      tags: tags ? tags.map((tag) => tag.tag_name.toLowerCase()) : [],
      ...(abilities.reduce(
        (acc, curr) => ({
          ...acc,
          [curr.abilityName.toLowerCase()]: curr.abilityScore,
        }),
        {}
      ) as Pick<
        CharacterList,
        "power" | "mobility" | "technique" | "survivability" | "energy"
      >),
    };
  });
