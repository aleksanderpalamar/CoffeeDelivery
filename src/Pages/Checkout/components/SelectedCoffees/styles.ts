import styled from "styled-components";
import { SectionBase } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  > h1 {
    font-family: ${(props) => props.theme.fonts.header};
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.base["base-subtitle"]};
    font-weight: 700;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.smartphone}) {
    width: 100%;
    padding: 0.5rem;
  }
`;

export const DetailsContainer = styled(SectionBase)`
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`;

export const ConfirmationSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 0.875rem;
      font-weight: 400;
      font-family: ${(props) => props.theme.fonts.text};
      color: ${(props) => props.theme.colors.base["base-text"]};
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      font-family: ${(props) => props.theme.fonts.text};
      color: ${(props) => props.theme.colors.base["base-text"]};
    }

    strong {
      font-size: 1.25rem;
      font-weight: 400;
      font-family: ${(props) => props.theme.fonts.text};
      color: ${(props) => props.theme.colors.base["base-text"]};
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.smartphone}) {
    flex-direction: column;
  }
`;
