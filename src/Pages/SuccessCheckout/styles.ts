import styled from "styled-components";

export const SuccessCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  > div {
    h1 {
      font-weight: 800;
      font-family: ${props => props.theme.fonts.header};
      font-size: 2rem;
      color: ${props => props.theme.colors.product["yellow-dark"]};
    }
    span {
      font-weight: 400;
      font-family: ${props => props.theme.fonts.text};
      font-size: 1.25rem;
      color: ${props => props.theme.colors.base["base-subtitle"]};
    }
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CheckoutDetailsConntainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${props => props.theme.colors.base.background};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
  }
`;

export const RegularText = styled.span`
  font-weight: 400;
  font-size: 1rem;
  font-family: ${props => props.theme.fonts.text};
  color: ${props => props.theme.colors.base["base-text"]};
`;

export const Strong = styled.strong`
  font-weight: 700;
  font-size: 1rem;
  font-family: ${props => props.theme.fonts.text};
  color: ${props => props.theme.colors.base["base-text"]};
`;