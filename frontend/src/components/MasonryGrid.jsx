import { Masonry } from "react-plock";

const MasonryGrid = () => {
  const images = [
    "/gallery20.jpeg",
    "/hero1.webp",
    "/gallery12.jpeg",
    "/cta4.jpeg",
    "/hero2.webp",
    "/gallery4.jpeg",
    "/hero4.webp",
    "/hero6.webp",
    "/cta1.jpeg",
    "/hero5.webp",
    "/cta3.jpeg",
    "/hero7.webp",
    "/gallery19.jpeg",
    "/hero8.webp",
    "/cta2.jpeg",
    "/hero10.webp",
    "/gallery1.jpeg",
    "/gallery11.jpeg",
    "/gallery13.jpeg",
    "/gallery3.jpeg",
    "/gallery5.jpeg",
    "/hero3.webp",
    "/gallery6.jpeg",
    "/gallery7.jpeg",
    "/gallery8.jpeg",
    "/gallery9.jpeg",
    "/gallery2.jpeg",
    "/gallery10.jpeg",
    "/cta5.jpeg",
    "/gallery21.jpeg",
    "/gallery15.jpeg",
    "/gallery16.jpeg",
    "/gallery17.jpeg",
    "/gallery18.jpeg",
    "/gallery14.jpeg",
  ];

  return (
    <>
      <p>MasonryGrid</p>
      <Masonry
        items={images}
        config={{
          columns: [1, 2, 3, 4, 5],
          gap: [8, 12, 16, 16, 16],
          media: [640, 768, 1024, 1280, 1280],
        }}
        render={(image, index) => {
          return <img key={index} src={image} style={{ width: "100%", height: "auto" }} />;
        }}
      />
      {/* <div className="gallery-container">
        {images.map((img, index) => (
          <div key={index}>
            <img className="gallery-img" src={img} alt="mapped images" />{" "}
          </div>
        ))}
      </div> */}
    </>
  );
};

export default MasonryGrid;
