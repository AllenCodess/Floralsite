import { useState } from "react";

const Checkout = () => {
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
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="checkout-container">
        <h1>Guest Checkout</h1>
        <div className="checkout-form">
          <form onSubmit={handleSubmit}>
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
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  placeholder="Last Name"
                  onChange={handleChange}
                  className="nne-input"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                  className="nne-input"
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
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  placeholder="Address"
                  onChange={handleChange}
                  className="nne-input"
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
                />
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  placeholder="Zip Code"
                  onChange={handleChange}
                  className="nne-input"
                />
              </div>
            </div>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
