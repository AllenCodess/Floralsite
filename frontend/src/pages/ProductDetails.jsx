import { useParams } from "react-router";
import products from "./../components/data";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const { id } = useParams();

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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
