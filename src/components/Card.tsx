"use client"

import styled from "styled-components";

const Card = styled.div`
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  @media (prefers-color-scheme: dark) {
    background: #3a3a3a;
    border-color: #555;
  }
`;

export default Card;