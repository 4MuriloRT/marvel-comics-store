export type Comic = {
    id: number;
    title: string;
    price: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  };
  
  export const mockComics: Comic[] = [
    {
      id: 1,
      title: "GODZILLA VS. SPIDER-MAN (2025) #1",
      price: "R$ 29,90",
      thumbnail: {
        path: "https://cdn.marvel.com/u/prod/marvel/i/mg/7/c0/680f876698cce",
        extension: "jpg",
      },
    },
    {
      id: 2,
      title: "Wolverine and Kitty Pryde (2025) #1",
      price: "R$ 24,90",
      thumbnail: {
        path: "https://cdn.marvel.com/u/prod/marvel/i/mg/4/40/680f8729c60f6",
        extension: "jpg",
      },
    },
    {
      id: 3,
      title: "Ultimate Spider-Man (2024) #16",
      price: "R$ 19,90",
      thumbnail: {
        path: "https://cdn.marvel.com/u/prod/marvel/i/mg/6/90/680f872a49a0d",
        extension: "jpg",
      },
    },
    {
      id: 4,
      title: "Doom Academy (2025) #3",
      price: "R$ 22,50",
      thumbnail: {
        path: "https://cdn.marvel.com/u/prod/marvel/i/mg/7/50/680f876747beb",
        extension: "jpg",
      },
    },
    {
      id: 5,
      title: "Thunderbolts: Doomstrike (2025) #3",
      price: "R$ 29,90",
      thumbnail: {
        path: "https://cdn.marvel.com/u/prod/marvel/i/mg/3/70/680f875e10f11",
        extension: "jpg",
      },
    },
    {
      id: 6,
      title: "Fantastic Four (2022) #31",
      price: "R$ 15,90",
      thumbnail: {
        path: "https://i.annihil.us/u/prod/marvel/i/mg/9/40/665f572c671b5",
        extension: "jpg",
      },
    },
    {
      id: 7,
      title: "Captain America (2025) #9",
      price: "R$ 21,00",
      thumbnail: {
        path: "https://cdn.marvel.com/u/prod/marvel/i/mg/6/d0/680f8768b30db",
        extension: "jpg",
      },
    },
    {
      id: 8,
      title: "X-Men (2025) #18",
      price: "R$ 19,90",
      thumbnail: {
        path: "https://i.annihil.us/u/prod/marvel/i/mg/c/50/665f576921a8c",
        extension: "jpg",
      },
    },
  ];