"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { getComics } from "@/utils/api";
import { Comic } from "@/types";
import Container from "@/components/Container";
import Title from "@/components/Title";
import ContainerCards from "@/components/ContainerCards";
import Card from "@/components/Card";
import CardSkeleton from "@/components/CardSkeleton";

const LoadMoreButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  margin: 40px 0;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:disabled {
    background: #a0a0a0;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  margin-top: 50px;
`;

export default function Home() {
  const [comics, setComics] = useState<Comic[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const comicsPerPage = 20;

  useEffect(() => {
    const loadInitialComics = async () => {
      setLoading(true);
      const initialComics = await getComics({ limit: comicsPerPage, offset: 0 });
      setComics(initialComics);
      if (initialComics.length < comicsPerPage) {
        setHasMore(false);
      }
      setOffset(comicsPerPage);
      setLoading(false);
    };
    loadInitialComics();
  }, []);

  const handleLoadMore = async () => {
    if (!hasMore || loadingMore) return;

    setLoadingMore(true);
    const newComics = await getComics({ limit: comicsPerPage, offset: offset });
    
    if (newComics.length > 0) {
      setComics((prevComics) => [...prevComics, ...newComics]);
      setOffset((prevOffset) => prevOffset + comicsPerPage);
    } 
    
    if (newComics.length < comicsPerPage) {
      setHasMore(false);
    }

    setLoadingMore(false);
  };

  if (loading) {
    return (
      <Container>
        <Title>HQs Marvel</Title>
        <ContainerCards>
          {Array.from({ length: 8 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </ContainerCards>
      </Container>
    );
  }

  if (!loading && comics.length === 0) {
    return (
      <Container>
        <Title>HQs Marvel</Title>
        <ErrorMessage>
          Oops! Não conseguimos encontrar os quadrinhos no momento. Tente novamente mais tarde.
        </ErrorMessage>
      </Container>
    );
  }

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
        <LoadMoreButton onClick={handleLoadMore} disabled={loadingMore}>
          {loadingMore ? "Carregando..." : "Carregar Mais"}
        </LoadMoreButton>
      </Container>
    </main>
  );
}