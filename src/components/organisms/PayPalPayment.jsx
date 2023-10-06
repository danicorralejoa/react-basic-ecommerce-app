import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PAYPAL_CLIENT_ID } from "../../constants/env";
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const PayPalPayment = ({ value, order }) => {
  const nav = useNavigate()
  const { state } = useContext(CartContext);
  return (
    <PayPalScriptProvider
      options={{
        "client-id": PAYPAL_CLIENT_ID,
      }}
    >
      <PayPalButtons
        createOrder={(_, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value,
                },
                custom_id: order.id,
              },
            ],
          })
        }}
        onApprove={(_data, actions) => {
          return actions.order.capture().then((resp) => {
            if (resp.status === "COMPLETED") {
              state.cart = [];
              nav("/order-success");
            } else {
              alert("Tu pado no se procesó. Intenta nuevamente.");
            }
          })
        }}
      />
    </PayPalScriptProvider>
  )
}

export default PayPalPayment
