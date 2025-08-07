"use client";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Title = styled.h1`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  aling-text: center;
  margin: 0;
  padding-top: 30px;
  font-size: 3rem;
`;

export default function Home() {
  return (
    <main>
      <Container>
        <Title>HQs Marvel</Title>
      </Container>
    </main>
  );
}
