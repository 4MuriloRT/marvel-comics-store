"use client";

import styled from "styled-components";

const ContainerCards = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.large};
    padding: ${({ theme }) => theme.spacing.large};
    max-width: 1320px;
    margin: 0 auto;

    @media (min-width: 500px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 768px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1200px){
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1600px) {
        grid-template-columns: repeat(5, 1fr);
    }
`;

export default ContainerCards;