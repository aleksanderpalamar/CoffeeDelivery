import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 104px;
  padding: 0 20rem;

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 104px;
    padding: 1rem;
  }

  img {
    width: 89.95px;
    height: 40px;
  }

  div {
    gap: 1rem;
    display: flex;
    align-items: center;

    span {
      color: ${(props) => props.theme.colors.product["purple-dark"]};
      background: ${(props) => props.theme.colors.product["purple-light"]};
      border-radius: 8px;
      padding: 0.5rem 1rem;
      font-size: ${(props) => props.theme.fontSizes.md};
      font-weight: ${(props) => props.theme.fontWeights.bold};
      align-items: center;
      justify-content: center;
      display: flex;
      gap: 0.5rem;
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        background: ${(props) => props.theme.colors.product["yellow-light"]};
        color: ${(props) => props.theme.colors.product["yellow-dark"]};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        border: none;
        padding: 0.5rem;
        transition: 0.8s;

        &:hover {
          color: ${(props) => props.theme.colors.product["yellow-light"]};
          background: ${(props) => props.theme.colors.product["yellow-dark"]};          
        }
      }
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    height: 104px;
    padding: 1rem;
  }
`;
