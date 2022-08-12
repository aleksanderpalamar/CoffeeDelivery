import { FormProvider, useForm } from "react-hook-form";
import { CheckoutForm } from "./components/CheckoutForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutContainer } from "./styles";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export enum PaymentMethod {
  Credit = "credit",
  Debit = "debit",
  Money = "money",
}

const confirmCheckoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe o endereço"),
  number: zod.string().min(1, "Informe o número"),
  complement: zod.string(),
  neighborhood: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  uf: zod.string().min(1, "Informe o estado"),
  paymentMethod: zod.nativeEnum(PaymentMethod, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type CheckoutData = zod.infer<typeof confirmCheckoutFormValidationSchema>

type ConfirmCheckoutFormData = CheckoutData;

export function Checkout() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const confirmCheckoutForm = useForm<ConfirmCheckoutFormData>({
    resolver: zodResolver(confirmCheckoutFormValidationSchema),
  });

  const { handleSubmit } = confirmCheckoutForm;

  function handleConfirmCheckout(data: ConfirmCheckoutFormData) {
    navigate("/checkout-success", {
      state: data
    });

    clearCart();
  }

  return (
    <FormProvider {...confirmCheckoutForm}>
      <CheckoutContainer className="container" onSubmit={handleSubmit(handleConfirmCheckout)}>
        <CheckoutForm />
        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  );
}
