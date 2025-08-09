import ContainerCards from "@/components/ContainerCards";
import { getComics } from "@/utils/api";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { Comic } from "@/data/mockComics";

export default async function Home() {
  //const comics = await getComics();
  //console.log(comics);
  const comics: Comic[] = await getComics();

  return (
    <main>
      <Container>
        <Title>HQs Marvel</Title>
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
      </Container>
    </main>
  );
}
