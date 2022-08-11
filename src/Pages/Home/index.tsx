import { Container } from "./styles";
import { Intro } from "./components/Intro";
import { CoffeeList } from "./components/CoffeeList";

export function Home() {
  return (
   <>
    <Container>      
      <Intro />
      <CoffeeList />
    </Container>
   </>
  );
}
