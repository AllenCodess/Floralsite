import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";
import { increaseQuantity, decreaseQuantity, removeItem } from "../../slices/cartSlice";
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

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  let total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your Shopping cart is empty.</p>
      ) : (
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
                      <button className="cart-remove-btn" onClick={() => handleRemove(item._id)}>
                        Remove
                      </button>
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
          <div className="cart-right-side">
            <div className="cart-right-box">
              <h2 className="order-sum-header">Order Summary</h2>
              <div className="cart-total">
                <p> Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)}) Items</p>
                <p>${total}.00</p>
              </div>
              <hr className="cart-total-divider" />
              <div className="cart-total">
                <h2 className="total-price">Total</h2>
                <p className="total-price">${total}.00</p>
              </div>
              <div className="order-btn-container">
                <button className="order-sum-btn">Proceed to Checkout</button>
                <button className="order-sum-btn">
                  {" "}
                  <Link className="nav-links order-sum-btn" to={"/shop"}>
                    Continue Shopping
                  </Link>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
