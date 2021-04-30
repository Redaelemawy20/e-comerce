import React, { useState } from "react";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, handleToken, total_amount, paymentStatus } = useCartContext();

  return (
    <main>
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            {paymentStatus ? <h2>Congratulations Payment Successed</h2> : ""}
            <h2>your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <div>
            <StripeCheckout
              name="Happy Home"
              description="$5 for 5 email credits"
              amount={total_amount * 100}
              token={(token) => handleToken(token, total_amount)}
              stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
              <button className="btn">Add Credits</button>
            </StripeCheckout>
          </div>
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;
export default CheckoutPage;
