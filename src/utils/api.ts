/**
import md5 from "md5";

const API_BASE_URL = "https://gateway.marvel.com/v1/public";
const API_PUBLIC_KEY = process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY;
const API_PRIVATE_KEY = process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY;

const getTimeStamp = () => Date.now().toString();
const getHash = (timeStamp: string) =>
 md5(timeStamp + API_PRIVATE_KEY + API_PUBLIC_KEY);

const timeStamp = getTimeStamp();
const hash = getHash(timeStamp);
const query = `ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`;

export const getComics = async () => {
 const url = `${API_BASE_URL}/comics?${query}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }
    const data = await response.json();
    return data.data.results;
  } catch (error) {
    console.error("Falha ao buscar os quadrinhos:", error);
    return [];
  }

 return response;
};
**/

import { mockComics } from "@/data/mockComics";

export const getComics = async () => {
  console.log("Usando dados mockados. A API está offline.");
  // Usamos Promise.resolve para simular o comportamento de uma chamada de API
  return Promise.resolve(mockComics);
};
