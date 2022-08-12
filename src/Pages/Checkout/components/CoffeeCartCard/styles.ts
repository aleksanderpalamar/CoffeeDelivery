import styled from "styled-components";

export const CoffeeCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme.colors.base["base-button"]};
  padding: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > span {
    align-self: flex-start;
    font-size: 1rem;
    font-weight: 700;
    font-family: ${(props) => props.theme.fonts.text};
    color: ${(props) => props.theme.colors.base["base-text"]};
  }

  >div >div h1 {
    font-size: 1rem;
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.text};
    color: ${(props) => props.theme.colors.base["base-subtitle"]};
  }
`;

export const ActionContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme.colors.base["base-text"]};
  font-size: 0.75rem;
  height: 100%;
  border: none;
  background: ${(props) => props.theme.colors.base["base-button"]};
  padding: 0 0.5rem;
  border-radius: 6px;
  transition: 0.4s;

  svg {
    color: ${(props) => props.theme.colors.product.purple};
  }

  &:hover {
    background: ${(props) => props.theme.colors.base["base-hover"]};
  }
`;