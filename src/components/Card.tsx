"use client";

import styled from "styled-components";
import { FunctionComponent } from "react";

const ComicImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 2 / 3; /* Proporção comum para capas de HQ */
  object-fit: cover;
  border-radius: 4px;
`;

const ComicTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-top: 12px;
  text-align: center;
`;

const CardWrapper = styled.div`
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column; /* Organiza imagem e texto verticalmente */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
  
  @media (prefers-color-scheme: dark) {
    background: #3a3a3a;
    border-color: #555;
  }
`;

interface CardProps {
  imageUrl: string;
  title: string;
}

const Card: FunctionComponent<CardProps> = ({ imageUrl, title }) => {
  return (
    <CardWrapper>
      <ComicImage src={imageUrl} alt={`Capa de ${title}`} />
      <ComicTitle>{title}</ComicTitle>
    </CardWrapper>
  );
};

export default Card;