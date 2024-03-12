import api from "./Api";

const baseUrl = "public/characters";

export async function getCharacters(
  limit: number,
  offset: number,
  name?: string
): Promise<[]> {
  const data = await api.get(
    baseUrl +
      `?limit=${limit}&offset=${offset}${name ? `&nameStartsWith=${name}` : ""}`
  );
  return data.data.data.results;
}

export function getFavoriteCharacters(): any[] {
  return JSON.parse(localStorage.getItem("favorites") || '"');
}
