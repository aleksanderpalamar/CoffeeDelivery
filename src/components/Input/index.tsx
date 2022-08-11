import { forwardRef, InputHTMLAttributes } from "react";
import { InputStyle, InputStyleContainer, InputWrapper, RightText } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((
  { error, className, rightText, ...props }, ref) => {
    return (
      <>
        <InputWrapper className={className}>
          <InputStyleContainer hasError={!!error}>
            <InputStyle {...props} ref={ref} />
            {rightText && <RightText>{rightText}</RightText>}
          </InputStyleContainer>
          {error && <p>{error}</p>}
        </InputWrapper>
      </>
    )
  });