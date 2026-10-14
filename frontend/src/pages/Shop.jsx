const products = [
  {
    id: 1,
    name: "Mixed Flower Bouquet",
    description: "A vibrant mix of seasonal blooms for a bright joyful arrangement.",
    price: "$110.00",
    image: "/public/product1.jpeg",
  },
  {
    id: 2,
    name: "Tulip Bouquet",
    description: "A fresh bouquet of pink and yellow tulips for a bright, cheerful touch.",
    price: "$85.00",
    image: "/public/product2.jpeg",
  },
];

const ShopPage = () => {
  return (
    <>
      <h1>Shop page ALL PRODUCTS</h1>

      {products.map((product) => (
        <div className="product-container" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </>
  );
};

export default ShopPage;
