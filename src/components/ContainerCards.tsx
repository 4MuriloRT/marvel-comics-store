"use client";

import styled from "styled-components";

const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 24px;
    max-width: 1400px;
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
`;

export default ContainerCards;