"use client";

import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const SkeletonWrapper = styled.div`
  background: #e0e0e0;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const SkeletonImage = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  background: #c7c7c7;
  border-radius: 4px;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

const SkeletonTitle = styled.div`
  height: 1rem;
  width: 80%;
  background: #c7c7c7;
  border-radius: 4px;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const SkeletonPrice = styled.div`
  height: 1.1rem;
  width: 40%;
  background: #c7c7c7;
  border-radius: 4px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;


const CardSkeleton = () => {
  return (
    <SkeletonWrapper>
      <SkeletonImage />
      <InfoWrapper>
        <SkeletonTitle />
        <SkeletonPrice />
      </InfoWrapper>
    </SkeletonWrapper>
  );
};

export default CardSkeleton;
