import styled from "styled-components";

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface IconContainerProps {
  iconBg: string;
}

export const Container = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${props => props.iconBg};
  color: ${props => props.theme.colors.base.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;