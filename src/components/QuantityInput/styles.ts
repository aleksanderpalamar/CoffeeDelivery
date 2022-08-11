import styled, { css } from "styled-components";

interface QuantityInputContainerProps {
  size?: "small" | "medium";
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  flex: 1;
  background-color: ${props => props.theme.colors.base["base-button"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;  
  border-radius: 6px;  

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    font-size: 1.10rem;
    font-weight: 700;    
    font-family: ${props => props.theme.fonts.header};
    color: ${props => props.theme.colors.base["base-title"]};

    &:focus {
      outline: none;
    }
  }

  ${({ size }) => size === "medium" && css`
		padding: 0.1rem;
	`}

	${({ size }) => size === "small" && css`
		padding: 0.2rem 0.2rem;
	`}
`;

export const IconWrapper = styled.button.attrs({
  type: "button"
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${props => props.theme.colors.product.purple};
  cursor: pointer;
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    color: ${props => props.theme.colors.product["purple-dark"]};
  }
`;