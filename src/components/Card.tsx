"use client";

import styled from "styled-components";
import { FunctionComponent } from "react";

const ComicImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

const ComicTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;
  height: 2.6em;
  overflow: hidden;
`;

const ComicPrice = styled.p`
  font-family: ${({theme}) => theme.fonts.mono};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.cardShadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px ${({ theme }) => theme.colors.cardShadow};
  }
`;

interface CardProps {
  imageUrl: string;
  title: string;
  price: string;
}

const Card: FunctionComponent<CardProps> = ({ imageUrl, title, price }) => {
  return (
    <CardWrapper>
      <ComicImage src={imageUrl} alt={`Capa de ${title}`} />
      <InfoWrapper>
        <ComicTitle>{title}</ComicTitle>
        <ComicPrice>{price}</ComicPrice>
      </InfoWrapper>
    </CardWrapper>
  );
};

export default Card;
