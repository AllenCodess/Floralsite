import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <div className="cart-container">
        <div className="cart-left-side">
          <h1>Your Cart</h1>
          <hr className="cart-divider" />
          <div className="cart-row">
            <h3>PRODUCT</h3>
            <p>PRICE</p>
            <p>QUANTITY</p>
            <p>SUBTOTAL</p>
          </div>
          <hr className="cart-divider" />
          <div className="item-list">
            {cartItems.map((item) => (
              <div className="cart-row single-product" key={item._id}>
                <div className="product-info">
                  {<img className="cart-image" src={item.image} alt={item.name} />}
                  <div className="cart-text">
                    <p className="cart-info-name">{item.name}</p>
                    <p className="cart-info-desc">{item.description}</p>
                  </div>
                </div>
                <p>${item.price.toFixed(2)}</p>
                <p>{item.quantity}</p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="cart-right-side"></div>
      </div>
    </>
  );
};

export default Cart;
