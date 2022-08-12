import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  color: ${(props) => props.theme.colors.base.white};
  font-weight: 700;
  background-color: ${(props) => props.theme.colors.product.yellow};
  font-size: 0.875rem;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  transition: 0.4s;
  line-height: 1.3rem;
  margin-top: 0.7rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover{
		background-color: ${(props) => props.theme.colors.product["yellow-dark"]};
	}
`;