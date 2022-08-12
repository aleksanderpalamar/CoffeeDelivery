import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./Layout/DefaultLayout";
import { Checkout } from "./Pages/Checkout";
import { Home } from "./Pages/Home";
import { SuccessCheckout } from "./Pages/SuccessCheckout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-success" element={<SuccessCheckout />} />
      </Route>
    </Routes>
  );
}
