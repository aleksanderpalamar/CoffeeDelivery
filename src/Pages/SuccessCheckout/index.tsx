import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";
import { InfoCard } from "../../components/InfoCard";
import {
  CheckoutDetailsConntainer,
  RegularText,
  SuccessCheckoutContainer,
  Strong,
} from "./styles";
import IllustrationImg from "../../assets/Illustration.png";

export function SuccessCheckout() {
  const { colors } = useTheme();

  return (
    <SuccessCheckoutContainer className="container">
      <div>
        <h1>Uhu! pedido confirmado com sucesso</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </div>
      <section>
        <CheckoutDetailsConntainer>
          <InfoCard
            icon={<MapPin weight="fill" />}
            iconBg={colors.product.purple}
            text={
              <RegularText>
                Entrega em <br />
                <Strong>Boa Vista - Curitiba/PR</Strong>
                <br />
              </RegularText>
            }
          />
          <InfoCard
            icon={<Clock weight="fill" />}
            iconBg={colors.product.yellow}
            text={
              <RegularText>
                Tempo estimado de entrega <br />
                <Strong>20 min - 30 min</Strong>
              </RegularText>
            }
          />
          <InfoCard
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors.product["yellow-dark"]}
            text={
              <RegularText>
                Pagamento na entrega <br />
                <Strong>R$ 0,00</Strong>
              </RegularText>
            }
          />
        </CheckoutDetailsConntainer>

        <img src={IllustrationImg} alt="" />
      </section>
    </SuccessCheckoutContainer>
  );
}
