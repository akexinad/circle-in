import { Character } from "../types";
import jsonData from "./characters.json";

const data: Character[] = jsonData as Character[];

export const fetchCharacters: (
  token?: string | number
) => Promise<Character[] | { error: { message: string } }> = (token) =>
  new Promise((resolve, reject) => {
    if (token) {
      return resolve(data);
    }

    return reject({
      message: "There was error",
    });
  });
