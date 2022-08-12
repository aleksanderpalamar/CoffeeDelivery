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
import { useLocation, useNavigate } from "react-router-dom";
import { CheckoutData } from "../Checkout";
import { useEffect } from "react";
import { paymentMethods } from "../Checkout/components/CheckoutForm/Payment";

interface ParamsType {
  state: CheckoutData;
}

export function SuccessCheckout() {
  const { colors } = useTheme();
  const { state } = useLocation() as unknown as ParamsType;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

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
                <Strong>{state.street}, {state.number}</Strong>
                <br />
                {state.neighborhood} - {state.city}, {state.uf}
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
                <Strong>{paymentMethods[state.paymentMethod].label}</Strong>
              </RegularText>
            }
          />
        </CheckoutDetailsConntainer>

        <img src={IllustrationImg} alt="" />
      </section>
    </SuccessCheckoutContainer>
  );
}
