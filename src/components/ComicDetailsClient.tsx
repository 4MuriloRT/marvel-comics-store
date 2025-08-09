"use client";

import styled from "styled-components";
import Image from "next/image";
import { Comic } from "@/types";
import { useCart } from "@/contexts/CartContext";

const DetailsWrapper = styled.div`
  display: flex;
  gap: 40px;
  padding: 40px;
  max-width: 1100px;
  margin: 40px auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ComicImage = styled(Image)`
  width: 100%;
  max-width: 380px;
  height: auto;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const ComicInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const ComicTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
`;

const RareTag = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 16px;
  text-transform: uppercase;
`;

const ComicDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
`;

const ComicPrice = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 16px 0;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: #b8141a;
  }
`;

interface ComicDetailsClientProps {
  comic: Comic;
}

export default function ComicDetailsClient({ comic }: ComicDetailsClientProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(comic);
    alert(`${comic.title} foi adicionado ao carrinho!`);
  };

  return (
    <DetailsWrapper>
      <ComicImage
        src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}
        alt={`Capa de ${comic.title}`}
        width={380}
        height={570}
        priority
      />
      <ComicInfo>
        <TitleWrapper>
          <ComicTitle>{comic.title}</ComicTitle>
          {comic.isRare && <RareTag>Raro</RareTag>}
        </TitleWrapper>

        {comic.description ? (
          <ComicDescription
            dangerouslySetInnerHTML={{ __html: comic.description }}
          />
        ) : (
          <ComicDescription>Descrição não disponível.</ComicDescription>
        )}

        <ComicPrice>{comic.price}</ComicPrice>

        <AddToCartButton onClick={handleAddToCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          Adicionar ao Carrinho
        </AddToCartButton>
      </ComicInfo>
    </DetailsWrapper>
  );
}
