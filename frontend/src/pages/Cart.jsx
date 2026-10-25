import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../../slices/cartSlice";
import ProductDetails from "./ProductDetails";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleSubtractQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };
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

                <div className="quantity-container">
                  <button className="cart-btn" onClick={() => handleSubtractQuantity(item._id)}>
                    -
                  </button>
                  <span className="cart-quantity">{item.quantity}</span>
                  <button className="cart-btn" onClick={() => handleAddQuantity(item._id)}>
                    +
                  </button>
                </div>
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
