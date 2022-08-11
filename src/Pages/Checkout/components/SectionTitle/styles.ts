import styled from "styled-components";

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  div h3 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
    font-family: ${props => props.theme.fonts.header};
    color: ${props => props.theme.colors.base["base-subtitle"]};
  }

  div span {
    font-weight: 400;
    font-family: ${props => props.theme.fonts.text};
    color: ${props => props.theme.colors.base["base-text"]};
    font-size: 0.875rem;
    line-height: 1.125rem;
  }
`;