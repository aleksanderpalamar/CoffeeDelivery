import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { CartItem } from "../../../../context/CartContext";
import { coffees } from "../../../../data/coffees";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ActionContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({coffee}: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  const coffeeTotal = coffee.price * coffee.quantity;
  const formattedPrice = formatMoney(coffeeTotal);

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={coffee.photo} alt={coffee.name} />
        <div>
          <h1>{coffee.name}</h1>
          <ActionContainer>
            <QuantityInput 
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={1}
              size="small"
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionContainer>
        </div>
      </div>
      <span>{formattedPrice}</span>
    </CoffeeCartCardContainer>
  )
}