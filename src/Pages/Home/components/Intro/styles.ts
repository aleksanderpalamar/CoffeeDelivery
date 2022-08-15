import styled from "styled-components";
import bannerBackground from "../../../../assets/banner-background.png";

export const Container = styled.div`
  width: 100%;
  height: 35.6rem;
  background: ${() => `url(${bannerBackground}) no-repeat center center`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: ${(props) => props.theme.breakpoints.smartphone}) {
    height: auto;
    background: ${() => `url(${bannerBackground}) no-repeat center center`};
    background-size: cover;
  }
`;

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:3.5rem;

  section h1 {
    font-size: 3rem;
    font-family: ${props => props.theme.fonts.header};
    color: ${props => props.theme.colors.base["base-title"]};
    font-weight: ${props => props.theme.fontWeights.extrabold};
    line-height: ${props => props.theme.lineHeights.base};
  }

  section h3 {
    color: ${props => props.theme.colors.base["base-subtitle"]};
    font-size: 1.25rem;
    margin-top: 1rem;
    font-weight: 400;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.smartphone}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:1rem;
    margin-top: 2rem;
    padding: 1rem;

    section h1 {
      font-size: 2rem;
    }
    section h3 {
      font-size: 1rem;
    }

    img {
      width: 18rem;
      height: 15rem;
    }
  }
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  @media (max-width: ${props => props.theme.breakpoints.smartphone}) {
    width: 100%;
    display: grid;    
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    row-gap: 1rem;
    margin-top: 0.5rem;
  }
`;