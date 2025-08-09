interface Image {
  path: string;
  extension: string;
}

interface ComicPrice {
  type: string;
  price: number;
}

export interface ApiComic {
  id: number;
  title: string;
  description: string | null;
  prices: ComicPrice[];
  thumbnail: Image;
}

export interface Comic {
  id: number;
  title: string;
  description: string | null;
  price: string;
  isRare?: boolean;
  thumbnail: {
    path: string;
    extension: string;
  };
}