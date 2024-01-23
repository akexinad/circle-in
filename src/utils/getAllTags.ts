import { Character } from "../types";

export default function getAllTags(data: Character[]) {
  return Array.from(
    new Set(
      data
        .map((character) => character.tags?.map((tag) => tag.tag_name))
        .flat()
        .filter((tag) => tag)
    )
  );
}
