import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import LogoImage from "../../assets/Logo.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoImage} alt="" />
      <div>
        <span>
          <MapPin size={24} weight="fill"/>
          Curitiba, PR
        </span>
        <nav>
          <NavLink to="/checkout" title="Carrinho">
            <ShoppingCart size={24} weight="fill"/>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}