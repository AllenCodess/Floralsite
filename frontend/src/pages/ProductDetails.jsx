import { useParams } from "react-router";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../slices/cartSlice";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null); // NEW
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) {
          // FIXED: was !res
          throw new Error("Network response was not ok");
        }
        const result = await res.json();
        setProduct(result.data);

        // NEW: default to the first size if the product has sizes
        if (result.data.sizes?.length > 0) {
          setSelectedSize(result.data.sizes[0]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); // FIXED: re-fetch if the id changes

  const handlePlus = () => setQuantity((prev) => prev + 1);
  const handleMinus = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // NEW: one price that works for both kinds of products
  const price = selectedSize ? selectedSize.price : product?.price;

  const handleAddToCart = () => {
    dispatch(
      addItem({
        ...product,
        price, // NEW: the chosen size's price
        size: selectedSize?.label, // NEW
        quantity,
      }),
    );
    setQuantity(1);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="productDetails-container">
        <div className="pd-left">
          <img className="pd-img" src={product.image} alt={product.name} />
        </div>
        <div className="pd-right">
          <h1 className="pd-header">{product.name}</h1>
          <h2 className="pd-price">{`$${price}.00`}</h2> {/* CHANGED */}
          <hr className="pd-divider" />
          <p>{product.description}</p>
          {/* NEW: size dropdown, only for products with sizes */}
          {product.sizes?.length > 0 && (
            <div className="size-select">
              <p>Size:</p>
              <select
                value={selectedSize?.label}
                onChange={(e) =>
                  setSelectedSize(product.sizes.find((s) => s.label === e.target.value))
                }
              >
                {product.sizes.map((size) => (
                  <option key={size.label} value={size.label}>
                    {size.label} - ${size.price}
                  </option>
                ))}
              </select>
            </div>
          )}
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
