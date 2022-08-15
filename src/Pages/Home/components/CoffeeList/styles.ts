import styled from "styled-components";

export const CoffeeListContainer = styled.div`
  margin-top: 2rem;
  width: 100%;

  h1 {
    font-size: 2rem;
    font-family: ${(props) => props.theme.fonts.header};
  }
  
  @media (max-width: ${(props) => props.theme.breakpoints.smartphone}) {
    padding: 0.5rem;
  }
`;

export const CoffeesList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.smartphone}) {
    width: 100%;
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 1rem;
    row-gap: 2rem;
    margin-top: 3.5rem;
  }
`;
