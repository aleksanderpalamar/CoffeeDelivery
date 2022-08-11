import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;

  > p {
    font-size: 0.875rem;
    color: ${props => props.theme.colors.error.error};
  }
`;

interface InputStyleContainerProps {
  hasError?: boolean;
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.base["base-button"]};
  background-color: ${props => props.theme.colors.base["base-input"]};
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:focus-within {
    border-color: ${props => props.theme.colors.product["yellow-dark"]};
  }

  ${props => props.hasError && `border-color: ${props.theme.colors.product["yellow-dark"]}`}
`;

export const InputStyle = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  color: ${props => props.theme.colors.base["base-text"]};
  font-size: 0.75rem;
  padding: 0.75rem;
  &::placeholder {
    color: ${props => props.theme.colors.base["base-label"]};
  }
`;

export const RightText = styled.span`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${props => props.theme.colors.base["base-label"]};
`;