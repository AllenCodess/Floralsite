import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/products/all");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await res.json();
        setProducts(result.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            <img className="product-img" src={product.image} alt={product.name} />
            <div className="product-text-container">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <p className="product-price">
                {product.sizes?.length > 0 ? "Prices vary" : `$${product.price.toFixed(2)}`}
              </p>
              <Link className="product-btn product-link" to={`/product/${product._id}`}>
                VIEW ITEM
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ShopPage;
