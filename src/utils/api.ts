import md5 from "md5";
import { Comic } from "@/data/mockComics";

const API_BASE_URL = "https://gateway.marvel.com/v1/public";
const API_PUBLIC_KEY = process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY;
const API_PRIVATE_KEY = process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY;

if (!API_PUBLIC_KEY || !API_PRIVATE_KEY) {
  throw new Error(
    "Verifique suas chaves de API. Elas não foram encontradas no arquivo .env.local"
  );
}

const getApiParams = () => {
  const timeStamp = Date.now().toString();
  const hash = md5(timeStamp + API_PRIVATE_KEY + API_PUBLIC_KEY);
  return `ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`;
};


export const getComics = async (): Promise<Comic[]> => {
  const url = `${API_BASE_URL}/comics?${getApiParams()}&limit=20`;
  console.log({url});
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }
    const data = await response.json();

    const formattedComics: Comic[] = data.data.results.map((apiComic: any) => ({
      id: apiComic.id,
      title: apiComic.title,
      price: apiComic.prices.find((p: any) => p.type === 'printPrice')?.price || '9.99',
      isRare: Math.random() < 0.1,
      thumbnail: {
        path: apiComic.thumbnail.path,
        extension: apiComic.thumbnail.extension,
      },
    }));

    return formattedComics;
  } catch (error) {
    console.error("Falha ao buscar os quadrinhos:", error);
    return [];
  }
};

export const getComicById = async (id: number): Promise<Comic | undefined> => {
  const url = `${API_BASE_URL}/comics/${id}?${getApiParams()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro na API ao buscar HQ ${id}: ${response.status}`);
    }
    const data = await response.json();
    const apiComic = data.data.results[0];

    if (!apiComic) return undefined;

    const isRare = (apiComic.id % 10) < 2; 

    const formattedComic: Comic = {
      id: apiComic.id,
      title: apiComic.title,
      price: apiComic.prices.find((p: any) => p.type === 'printPrice')?.price || '9.99',
      isRare: isRare,
      thumbnail: {
        path: apiComic.thumbnail.path,
        extension: apiComic.thumbnail.extension,
      },
    };

    return formattedComic;
  } catch (error) {
    console.error(`Falha ao buscar o quadrinho ${id}:`, error);
    return undefined;
  }
};