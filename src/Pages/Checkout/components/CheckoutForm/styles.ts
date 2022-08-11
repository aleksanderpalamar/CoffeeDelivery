import styled from "styled-components";
import { SectionBase } from "../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  > h1 {
    font-size: 1.125rem;
    font-family: ${(props) => props.theme.fonts.header};
    line-height: 1.14625rem;
    color: ${(props) => props.theme.colors.base["base-subtitle"]};
    font-weight: 700;
  }
`;

export const SectionFormContainer = styled(SectionBase)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`;

export const PaymentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.75rem;

  > strong {
    grid-column: span 3;
    color: ${(props) => props.theme.colors.error.error};
    font-size: 1.175rem;
    font-family: ${(props) => props.theme.fonts.text};
    font-weight: 400;
    margin-top: 0.875rem;
  }
`;
