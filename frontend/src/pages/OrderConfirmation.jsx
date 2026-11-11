import { useLocation, Link } from "react-router";

const OrderConfirmation = () => {
  const { state } = useLocation();
  const order = state?.order;

  if (!order) {
    return (
      <div className="confirmation-container">
        <div className="confirmation-box confirmation-center">
          <h1 className="confirmation-header">Thank you for your order!</h1>
          <Link className="confirmation-btn" to="/shop">
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="confirmation-container">
      <div className="confirmation-top">
        <h1 className="confirmation-header">Thank you, {order.firstName}!</h1>
        <p>Your order has been placed.</p>
        <p className="confirmation-id">Order #{order._id}</p>
      </div>

      <div className="confirmation-box">
        <h2 className="confirmation-title">ORDER SUMMARY</h2>
        {order.items.map((item) => (
          <div className="confirmation-item" key={`${item.product}-${item.size}`}>
            <div>
              <p className="confirmation-item-name">{item.name}</p>
              {item.size && <p className="confirmation-muted">{item.size}</p>}
              <p className="confirmation-muted">Quantity: {item.quantity}</p>
            </div>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <hr className="confirmation-divider" />
        <div className="confirmation-total">
          <h2>Total</h2>
          <h2>${order.total.toFixed(2)}</h2>
        </div>
      </div>

      <div className="confirmation-details">
        <div className="confirmation-box">
          <h2 className="confirmation-title">SHIPPING INFORMATION</h2>
          <p>
            {order.firstName} {order.lastName}
          </p>
          <p>{order.email}</p>
          <p>{order.phoneNumber}</p>
          <p>{order.address}</p>
          <p>
            {order.city}, {order.postalCode}
          </p>
        </div>

        <div className="confirmation-box">
          <h2 className="confirmation-title">DELIVERY DETAILS</h2>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(order.deliveryDate).toLocaleDateString("en-US", {
              timeZone: "UTC",
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          {order.deliveryInstructions && (
            <p>
              <strong>Instructions:</strong> {order.deliveryInstructions}
            </p>
          )}
        </div>
      </div>

      <div className="confirmation-center">
        <Link className="confirmation-btn" to="/shop">
          CONTINUE SHOPPING
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
