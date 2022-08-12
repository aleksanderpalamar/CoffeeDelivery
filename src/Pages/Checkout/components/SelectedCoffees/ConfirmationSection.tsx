import { Button } from "../../../../components/Button";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

const Delivery_Price = 3.5;

export function ConfirmationSection() {
  const {cartItemsTotal, cartQuantity} = useCart();
  const cartTotal = Delivery_Price + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal);
  const formattedDeliveryPrice = formatMoney(Delivery_Price);

  return (
    <ConfirmationSectionContainer>
      <div>
        <span>Total de itens</span>
        <p>{formattedItemsTotal}</p>
      </div>
      <div>
        <span>Entrega</span>
        <p>{formattedDeliveryPrice}</p>
      </div>
      <div>
        <span>Total</span>
        <p>{formattedCartTotal}</p>
      </div>

      <Button text="confirmar pedido" disabled={cartQuantity <= 0} type="submit"/>
    </ConfirmationSectionContainer>
  )
}