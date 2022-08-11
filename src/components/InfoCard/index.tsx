import { ReactNode } from "react";
import { Container, InfoWithIconContainer } from "./styles";

interface InfoCardProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconBg: string;
}

export function InfoCard({ icon, text, iconBg }: InfoCardProps) {
  return (
    <InfoWithIconContainer>
      <Container iconBg={iconBg}>{icon}</Container>
			{typeof text === "string" ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  )
}