import { Bank, CreditCard, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { PaymentCard } from "../PaymentCard";
import { PaymentContainer } from "./styles";

export const paymentMethods = {
  credit: {
    label: "Cartão de crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};

export function Payment() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <PaymentContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentCard
          id={key}
          icon={icon}
          label={label}
          key={label}
          value={key}
        />
      ))}
      {paymentMethodError && <strong>{paymentMethodError}</strong>}
    </PaymentContainer>
  );
}
