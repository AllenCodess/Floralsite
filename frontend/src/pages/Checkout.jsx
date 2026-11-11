import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { clearCart } from "../../slices/cartSlice";

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    deliveryDate: "",
    deliveryInstructions: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formRef = useRef(null);
  // PayPal keeps its first copy of our functions, so refs give it the latest values
  const formDataRef = useRef(formData);
  formDataRef.current = formData;
  const cartRef = useRef(cartItems);
  cartRef.current = cartItems;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Only send what the server needs; it looks up prices itself
  const getItems = () =>
    cartRef.current.map((item) => ({
      _id: item._id,
      quantity: item.quantity,
      size: item.size,
    }));

  // 1. Runs when the PayPal button is clicked: block it if the form isn't filled in
  const handleClick = (data, actions) => {
    setError("");
    if (!formRef.current.reportValidity()) return actions.reject();
    return actions.resolve();
  };

  // 2. Ask our server to create the PayPal order
  const createOrder = async () => {
    const res = await fetch("/api/paypal/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: getItems() }),
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.message || "Could not start payment");
    return result.id;
  };

  // 3. Buyer approved: ask our server to capture the payment and save the order
  const onApprove = async (data) => {
    try {
      const res = await fetch(`/api/paypal/capture-order/${data.orderID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formDataRef.current, items: getItems() }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Payment failed");

      navigate(`/order/${result.data.order._id}`, { state: { order: result.data.order } });
      dispatch(clearCart());
    } catch (err) {
      setError(err.message);
    }
  };

  const earliestDate = new Date();
  earliestDate.setDate(earliestDate.getDate() + 2);
  const minDate = earliestDate.toLocaleDateString("en-CA");

  if (cartItems.length === 0) return <p className="empty-cart">Your cart is empty.</p>;

  return (
    <div className="checkout-container">
      <div className="checkout-form-container">
        <h1 className="checkout-header">Guest Checkout</h1>
        <form className="checkout-form" ref={formRef} onSubmit={(e) => e.preventDefault()}>
          <div className="shipping-section">
            <h2>SHIPPING INFORMATION</h2>
            <div className="name-email-inputs">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                placeholder="First Name"
                onChange={handleChange}
                className="nne-input"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder="Last Name"
                onChange={handleChange}
                className="nne-input"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                className="nne-input"
                required
              />
            </div>
            <div className="num-address">
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                placeholder="Phone Number"
                onChange={handleChange}
                className="nne-input"
                required
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                placeholder="Address"
                onChange={handleChange}
                className="nne-input"
                required
              />
            </div>
            <div className="name-email-inputs">
              <input
                type="text"
                name="city"
                value={formData.city}
                placeholder="City"
                onChange={handleChange}
                className="nne-input"
                required
              />
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                placeholder="Zip Code"
                onChange={handleChange}
                className="nne-input"
                required
              />
            </div>
          </div>
          <div className="delivery-section">
            <h2>DELIVERY DETAILS</h2>
            <div className="delivery-details">
              <input
                type="date"
                name="deliveryDate"
                className="nne-input"
                value={formData.deliveryDate}
                onChange={handleChange}
                required
                min={minDate}
              />
              <textarea
                name="deliveryInstructions"
                value={formData.deliveryInstructions}
                placeholder="Delivery instructions (optional)"
                onChange={handleChange}
                className="nne-input"
              />
            </div>
          </div>
        </form>

        {error && <p className="checkout-error">{error}</p>}

        <PayPalScriptProvider
          options={{
            clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
            currency: "USD",
            disableFunding: "paylater",
          }}
        >
          <PayPalButtons
            style={{ layout: "vertical" }}
            onClick={handleClick}
            createOrder={createOrder}
            onApprove={onApprove}
            onError={() => setError("Something went wrong with PayPal. Please try again.")}
          />
        </PayPalScriptProvider>
      </div>

      <div className="order-summary">
        <div className="checkout-right-box">
          <h2 className="order-sum-header">Order Summary</h2>
          <div className="item-list">
            {cartItems.map((item) => (
              <div className="checkout-item-list" key={`${item._id}-${item.size}`}>
                <div className="product-info">
                  <img className="checkout-image" src={item.image} alt={item.name} />
                  <div className="cart-text">
                    <p className="checkout-info-name">{item.name}</p>
                    {item.size && <p>{item.size}</p>}
                    <p>${item.price.toFixed(2)}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr className="cart-total-divider" />
          <div className="cart-total">
            <h2 className="total-price">Total</h2>
            <p className="total-price">${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
