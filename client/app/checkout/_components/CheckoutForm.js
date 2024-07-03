"use client";
import { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useCreateOrderMutation } from "../../_state/_services/OrderApi";
import {
  useDeleteCartMutation,
  useGetCartItemsQuery,
} from "../../_state/_services/CartApi";

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useUser();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { data, isSuccess, refetch } = useGetCartItemsQuery(
    user?.primaryEmailAddress?.emailAddress
  );
  const [createOrder] = useCreateOrderMutation();
  const [deleteCart] = useDeleteCartMutation();

  // Function to create order and update cart
  const createOrderAndUpdateCart = async () => {
    await createOrder({
      data: {
        email: user?.primaryEmailAddress?.emailAddress,
        username: user?.fullName,
        amount,
        products,
      },
    });

    await Promise.all(
      data?.data?.map((item) => {
        deleteCart(item?.id);
      })
    );

    refetch();
  };

  const sendEmail = async () => {
    await axios.post("/api/send", {
      email: user.primaryEmailAddress.emailAddress,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    // try {
      await createOrderAndUpdateCart();
      await sendEmail();

      const { data } = await axios.post("/api/create-payment-intent", {
        amount: Number(amount), // Use the correct payload format here
      });
      const clientSecret = data.client_secret;

      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/payment-confirm",
        },
      });

      if (result.error) {
        setErrorMessage(result.error.message);
      } else {
        // Handle successful payment here
        alert("successful")
        console.log(result)
      }
    // } catch (error) {
    //   setErrorMessage("Error processing payment: " + error.message);
    // } finally {
      setLoading(false);
    // }
  };

  useEffect(() => {
    if (data?.data) {
      const ProductsList = data.data.map(
        (item) => item?.attributes?.products?.data[0]?.id
      );
      setProducts(ProductsList);
      console.log("Products: ", ProductsList);
    }
  }, [data]);

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <PaymentElement />
      <button
        type="submit"
        className="w-full p-2 mt-4 text-white rounded-md bg-teal-600"
        disabled={loading}
      >
        {loading ? "Processing..." : "Submit"}
      </button>
      {errorMessage && <div className="mt-4 text-red-600">{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;
