import { ReactNode } from "react";
import { SectionTitleContainer } from "./styles";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <>
      <SectionTitleContainer>
        {icon}
        <div>
          <h3>{title}</h3>
          <span>{subtitle}</span>
        </div>
      </SectionTitleContainer>
    </>
  )
}