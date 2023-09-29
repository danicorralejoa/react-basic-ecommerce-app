import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PAYPAL_CLIENT_ID } from "../../constants/env";

const PayPalPayment = () => {
  const createOrder = async () =>  {
    const response = await fetch("/my-server/create-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product ids and quantities
      body: JSON.stringify({
        cart: [
          {
            id: "YOUR_PRODUCT_ID",
            quantity: "YOUR_PRODUCT_QUANTITY",
          },
        ],
      }),
    });
    const order = await response.json();
    return order.id;
}

  const onApprove = async () => {
    const response = await fetch("/my-server/capture-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID
      })
    });
    const orderData = await response.json();
    const name = orderData.payer.name.given_name;
    alert(`Transaction completed by ${name}`);

  }
    return (
        <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID }}>
            <PayPalButtons style={{ layout: "horizontal" }}
             createOrder = {createOrder}
             onApprove={onApprove}
           />
        </PayPalScriptProvider>
    );
}

export default PayPalPayment;
