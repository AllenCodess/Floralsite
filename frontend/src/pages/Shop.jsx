import Footer from "../components/Footer";

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
  {
    id: 3,
    name: "Just Because",
    description: "A cheerful, garden-style bouquet perfect for thoughtful everyday moments.",
    price: "$115.00",
    image: "/public/product3.jpeg",
  },
  {
    id: 4,
    name: "Birthday Bouquet",
    description:
      "A sparkling red rose arrangement made to celebrate birthdays in a bold, luxurious way.",
    price: "$95.00",
    image: "/public/product4.jpeg",
  },
  {
    id: 5,
    name: "Glitter Bouquet",
    description: "A dazzling glitter rose arrangement for a bold, unforgettable statement.",
    price: "$110.00",
    image: "/public/product5.jpeg",
  },
  {
    id: 6,
    name: "Custom Color Bouquet",
    description:
      "A striking custom rose arrangement in cool blue tones for a bold, unique statement.",
    price: "$130.00",
    image: "/public/product6.jpeg",
  },
  {
    id: 7,
    name: "Rose Bouquet",
    description: "A classic red rose bouquet available in different sizes for every occasion.",
    price: "Price depends on size of bouquet",
    image: "/public/product7.jpeg",
  },
  {
    id: 7,
    name: "Custom Rose Patterns",
    description: "Customize Rose patterns for your bouquet.",
    price: "$100.00",
    image: "/public/product8.jpeg",
  },
];

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
              <button className="product-btn"> VIEW ITEM</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ShopPage;
