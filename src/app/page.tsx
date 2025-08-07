import ContainerCards from "@/components/ContainerCards";
import { getComics } from "@/utils/api";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Title from "@/components/Title";

export default async function Home() {

  const comics = await getComics();
  
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