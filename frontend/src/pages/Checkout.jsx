import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
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
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const earliestDate = new Date();
  earliestDate.setDate(earliestDate.getDate() + 2);
  const minDate = earliestDate.toLocaleDateString("en-CA");
  return (
    <>
      <div className="checkout-container">
        <div className="checkout-form-container">
          <h1 className="checkout-header">Guest Checkout</h1>
          <form className="checkout-form" onSubmit={handleSubmit}>
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
            <button className="checkout-btn " type="submit">
              Place Order
            </button>
          </form>
        </div>
        <div className="order-summary">
          <div className="checkout-right-box">
            <h2 className="order-sum-header">Order Summary</h2>

            <div className="item-list">
              {cartItems.map((item) => (
                <div className="checkout-item-list" key={item._id}>
                  <div className="product-info">
                    {<img className="checkout-image" src={item.image} alt={item.name} />}
                    <div className="cart-text">
                      <p className="checkout-info-name">{item.name}</p>
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
    </>
  );
};

export default Checkout;
