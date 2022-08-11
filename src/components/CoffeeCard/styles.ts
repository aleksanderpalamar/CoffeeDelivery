import styled from "styled-components";

export const CoffeCardContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${props => props.theme.colors.base["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 0;
  text-align: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background-color: ${props => props.theme.colors.product["yellow-light"]};
    color: ${props => props.theme.colors.product["yellow-dark"]};
    font-size: 0.625rem;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`;

export const Name = styled.div`
  margin-bottom: 0.5rem;
	font-weight: 700;
	font-size: 1.25rem;
	line-height: 1.625rem;
	color: ${props => props.theme.colors.base["base-subtitle"]};
	font-family: ${props => props.theme.fonts.header};
	text-align: center;
`;

export const Description = styled.div`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.1375rem;
  color: ${props => props.theme.colors.base["base-label"]};
  font-family: ${props => props.theme.fonts.text};
  margin-bottom: 2rem;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  div > span {
    font-size: 0.875rem;
    font-weight: 400;
    font-family: ${props => props.theme.fonts.text};
    color: ${props => props.theme.colors.base["base-text"]};
  }

  div > h2 {
    font-size: 1,5rem;
    font-weight: 800;
    font-family: ${props => props.theme.fonts.header};
    color: ${props => props.theme.colors.base["base-text"]};
    line-height: 1.1375rem;
  }
`;

export const AddCartWrapper = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.product["purple-dark"]};
    color: ${props => props.theme.colors.base["base-card"]};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;
    padding: 0.5rem;

    &:hover {
      background-color: ${props => props.theme.colors.product.purple};
    }
  }
`;