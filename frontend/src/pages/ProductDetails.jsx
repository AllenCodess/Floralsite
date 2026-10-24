import { useParams } from "react-router";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../slices/cartSlice";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res) {
          throw new Error("Network reponse was not ok");
        }
        const result = await res.json();
        setProduct(result.data);
        console.log(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePlus = () => setQuantity((prev) => prev + 1);
  const handleMinus = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity }));
    setQuantity(1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="productDetails-container">
        <div className="pd-left">
          <img className="pd-img" src={product.image} alt="" />
        </div>
        <div className="pd-right">
          <h1 className="pd-header">{product.name}</h1>
          <h2 className="pd-price">{`$${product.price}.00`}</h2>
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
              <strong>Color Palette:</strong> {product.color}
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
