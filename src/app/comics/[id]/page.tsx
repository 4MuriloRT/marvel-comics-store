import { getComicById } from "@/utils/api";
import Container from "@/components/Container";
import ComicDetailsClient from "@/components/ComicDetailsClient";

interface ComicPageProps {
  params: {
    id: string;
  };
}

export default async function ComicPage({ params }: ComicPageProps) {
  const comic = await getComicById(Number(params.id));

  return (
    <main>
      <Container>
        {comic ? (
          <ComicDetailsClient comic={comic} />
        ) : (
          <h1>Quadrinho não encontrado!</h1>
        )}
      </Container>
    </main>
  );
}