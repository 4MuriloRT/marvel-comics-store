"use client";
import styled from "styled-components";
import ContainerCards from "@/components/ContainerCards";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 30px 0;
  font-size: 3rem;
`;

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

export default function Home() {
  return (
    <main>
      <Container>
        <Title>HQs Marvel</Title>
        <ContainerCards>
          <Card>HQ 1</Card>
          <Card>HQ 2</Card>
          <Card>HQ 3</Card>
          <Card>HQ 4</Card>
          <Card>HQ 5</Card>
          <Card>HQ 6</Card>
          <Card>HQ 7</Card>
          <Card>HQ 8</Card>
        </ContainerCards>
      </Container>
    </main>
  );
}
