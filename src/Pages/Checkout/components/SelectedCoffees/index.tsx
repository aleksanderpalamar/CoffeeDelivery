import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSectionContainer, DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  const { cartItems } = useCart();

  return (
    <>
      <SelectedCoffeesContainer>
        <h1>Cafés selecionados</h1>
        <DetailsContainer>
          {cartItems.map(item => (
            <CoffeeCartCard key={item.id} coffee={item} />
          ))}
          <ConfirmationSectionContainer />
        </DetailsContainer>
      </SelectedCoffeesContainer>
    </>
  )
}