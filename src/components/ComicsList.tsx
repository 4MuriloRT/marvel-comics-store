import { getComics } from "@/utils/api";
import { Comic } from "@/types";
import Card from "./Card";
import ContainerCards from "./ContainerCards";

export default async function ComicsList() {
  const comics: Comic[] = await getComics();

  return (
    <ContainerCards>
      {comics.map((comic) => (
        <Card
          key={comic.id}
          id={comic.id}
          title={comic.title}
          price={comic.price}
          isRare={comic.isRare}
          imageUrl={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}
        />
      ))}
    </ContainerCards>
  );
}