import { useParams } from "react-router";
import products from "./../components/data";

const ProductDetails = () => {
  let { id } = useParams();

  return (
    <>
      <h1>{products.name}</h1>
    </>
  );
};

export default ProductDetails;
