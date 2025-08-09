"use client";

import styled, { css } from "styled-components";
import { FunctionComponent } from "react";
import Link from "next/link";

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
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const RareTag = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 4px 8px;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 4px;
  text-transform: uppercase;
`;

const CardWrapper = styled.div<{ $isRare?: boolean }>`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.cardShadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  border: 2px solid transparent;

  ${({ $isRare, theme }) =>
    $isRare &&
    css`
      border-color: ${theme.colors.primary};
    `}

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px ${({ theme }) => theme.colors.cardShadow};
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

interface CardProps {
  id: number;
  imageUrl: string;
  title: string;
  price: string;
  isRare?: boolean;
}

const Card: FunctionComponent<CardProps> = ({
  id,
  imageUrl,
  title,
  price,
  isRare,
}) => {
  return (
    <CardLink href={`/comics/${id}`}>
      <CardWrapper $isRare={isRare}>
        {isRare && <RareTag>Raro</RareTag>}
        <ComicImage src={imageUrl} alt={`Capa de ${title}`} />
        <InfoWrapper>
          <ComicTitle>{title}</ComicTitle>
          <ComicPrice>{price}</ComicPrice>
        </InfoWrapper>
      </CardWrapper>
    </CardLink>
  );
};

export default Card;
