import axios, { AxiosInstance } from "axios";

const timestamp = "15001234353";
const publicKey = `3c2d81d9c827b98d5414ac6110c9a04c`;
const md5Hash = "b62124d679a6ac7b68ea3447f37b332e";
// const baseUrl = `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${md5Hash}`;
const baseUrl = `http://gateway.marvel.com/v1/`;

export const api: AxiosInstance = axios.create({
  baseURL: baseUrl,
  params: {
    ts: timestamp,
    apikey: publicKey,
    hash: md5Hash,
  },
});

export default api;
