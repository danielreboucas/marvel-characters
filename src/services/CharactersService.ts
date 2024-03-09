import api from "./Api";

const baseUrl = "public/characters";

export async function getCharacters(
  limit: number,
  offset: number
): Promise<[]> {
  const data = await api.get(baseUrl + `?limit=${limit}&offset=${offset}`);
  return data.data.data.results;
}
