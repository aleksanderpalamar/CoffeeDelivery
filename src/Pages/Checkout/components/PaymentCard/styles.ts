import styled, { css } from "styled-components";

export const PaymentCardContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${props => css`
      background-color: ${props.theme.colors.product.purple};
      background: ${props.theme.colors.product["purple-light"]};

      &:hover {
        background: ${props.theme.colors.product["purple-light"]};
      }
    `}
  }
`;

export const PaymentCardContentContainer = styled.div`
  padding: 0 1rem;
  background-color: ${props => props.theme.colors.base["base-button"]};
  color: ${props => props.theme.colors.base["base-text"]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${props => props.theme.colors.base["base-button"]};
  transition: 0.4s;

  svg {
    color: ${props => props.theme.colors.product.purple};
  }

  &:hover {
    background-color: ${props => props.theme.colors.base["base-hover"]};
  }

  user-select: none;
`;