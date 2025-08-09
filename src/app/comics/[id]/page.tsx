"use client";

import { getComicById } from "@/utils/api";
import Container from "@/components/Container";
import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Comic } from "@/data/mockComics";
// Estilos específicos para esta página (poderiam ser movidos para seus próprios componentes)
const ComicDetailsWrapper = styled.div`
  display: flex;
  gap: 40px;
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ComicImage = styled(Image)`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`;

const ComicInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ComicTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
`;

const ComicPrice = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin: 20px 0;
`;

const AddToCartButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: auto; // Empurra o botão para baixo

  &:hover {
    background-color: #b8141a; // Um vermelho mais escuro
  }
`;

export default function ComicPage({ params }: { params: {id: string }}) {
  const [comic, setComic] = useState<Comic | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComic = async () => {
      const fetchedComic = await getComicById(Number(params.id));
      if (fetchedComic) {
        setComic(fetchedComic);
      }
      setLoading(false);
    };

    fetchComic();
  }, [params.id]);

  if (loading) {
    return <Container><h1>Carregando...</h1></Container>;
  }

  if (!comic) {
    return <Container><h1>Quadrinho não encontrado!</h1></Container>;
  }
  return (
    <Container>
      <ComicDetailsWrapper>
        <ComicImage
          src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}
          alt={`Capa de ${comic.title}`}
          width={400}
          height={600}
          priority
        />
        <ComicInfo>
          <ComicTitle>{comic.title}</ComicTitle>
          <ComicPrice>{comic.price}</ComicPrice>
          {/* O botão do carrinho será implementado na próxima etapa */}
          <AddToCartButton>Adicionar ao Carrinho</AddToCartButton>
        </ComicInfo>
      </ComicDetailsWrapper>
    </Container>
  );
}