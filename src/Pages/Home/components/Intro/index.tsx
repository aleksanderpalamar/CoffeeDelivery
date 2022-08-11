import { BenefitsContainer, Container, IntroContainer } from "./styles";
import CoffeeImage from "../../../../assets/CoffeeDelivery.png";
import { InfoCard } from "../../../../components/InfoCard";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";

export function Intro() {
  const { colors } = useTheme();

  return (
    <Container>
      <IntroContainer className="container">
        <div>
          <section>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</h3>
          </section>        
          <BenefitsContainer>
            <InfoCard 
              iconBg={colors.product["yellow-dark"]}
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />
            <InfoCard 
              iconBg={colors.base["base-text"]}
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />
            <InfoCard 
              iconBg={colors.product["yellow"]}
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreável"
            />
            <InfoCard 
              iconBg={colors.product["purple-dark"]}
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
          </BenefitsContainer>
        </div>
        <img src={CoffeeImage} alt="Coffee Delivery" />
      </IntroContainer>
    </Container>
  );
}
