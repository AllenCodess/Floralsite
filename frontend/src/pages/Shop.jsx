import Footer from "../components/Footer";
import products from "./../components/data";
import { Link } from "react-router";

const ShopPage = () => {
  return (
    <>
      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img className="product-img" src={product.image} alt="" />
            <div className="product-text-container">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <button className="product-btn">
                <Link className="product-link" data={products} to={`/product/${product.id}`}>
                  VIEW ITEM
                </Link>{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ShopPage;
