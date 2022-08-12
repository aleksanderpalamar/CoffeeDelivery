import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { SectionTitle } from "../SectionTitle";
import { AddressForm } from "./AddressForm";
import { Payment } from "./Payment";
//import { Payment } from "./Payment";
import { Container, SectionFormContainer } from "./styles";

export function CheckoutForm() {
  const { colors } = useTheme();

  return (
    <>
      <Container>
        <h1>Complete seu pedido</h1>
        <SectionFormContainer>
          <SectionTitle 
            icon={<MapPinLine color={colors.product["yellow-dark"]} size={22}/>}
            title="Endereço de entrega"
            subtitle="Informe o endereço de entrega"
          />
          <AddressForm />
        </SectionFormContainer>
        <SectionFormContainer>
        <SectionTitle 
          icon={<CurrencyDollar color={colors.product.purple} size={22} />}
          title="Forma de pagamento"
          subtitle="Selecione a forma de pagamento"
        />          
          <Payment />                    
        </SectionFormContainer>
      </Container>
    </>
  )
}