import { useParams } from "react-router";
import products from "./../components/data";
import Footer from "../components/Footer";
import { useState } from "react";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const handlePlus = () => setQuantity((prev) => prev + 1);
  const handleMinus = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setQuantity(1); // Reset quantity after adding
  };

  const product = products.find((p) => p.id === Number(id));
  return (
    <>
      <div className="productDetails-container">
        <div className="pd-left">
          <img className="pd-img" src={product.image} alt="" />
        </div>
        <div className="pd-right">
          <h1 className="pd-header">{product.name}</h1>
          <h2 className="pd-price">{product.price}</h2>
          <hr className="pd-divider" />
          <p>{product.description}</p>
          <div className="quantity-controls">
            <p>Quantity:</p>
            <button className="product-details-btn" onClick={handleMinus}>
              -
            </button>
            <span>{quantity}</span>
            <button className="product-details-btn" onClick={handlePlus}>
              +
            </button>
          </div>
          <button className="pd-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <hr className="pd-divider" />
          <div className="pd-information">
            <h2>Product Details</h2>

            <p>
              <strong>Arrangement Type:</strong> {product.arrangement}
            </p>

            <p>
              <strong>Color Palette:</strong> {product.palette}
            </p>

            <p>
              <strong>Occasion:</strong> {product.occasion}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
