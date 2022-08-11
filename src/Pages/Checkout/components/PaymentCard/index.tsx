/* eslint-disable react/display-name */
import { forwardRef, InputHTMLAttributes, ReactNode } from "react"
import { PaymentCardContainer, PaymentCardContentContainer } from "./styles";

interface PaymentCardProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode;
  label: string;
  key: string;
  value: string;
}

export const PaymentCard = forwardRef<HTMLInputElement, PaymentCardProps>((
	{ id, icon, label, ...props }, ref) => {
	return (
		<PaymentCardContainer>
			<input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
			<label htmlFor={id}>
				<PaymentCardContentContainer>
					{icon}
					{label}
				</PaymentCardContentContainer>
			</label>
		</PaymentCardContainer>
	);
});