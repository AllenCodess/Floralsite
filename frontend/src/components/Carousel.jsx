const Carousel = () => {
  const images = ["hero1", "hero2", "hero3", "hero4", "hero5", "hero6", "hero7", "hero8", "hero10"];
  return (
    <>
      <div className="carousel">
        <div className="hero-text">
          <h1 className="hero-header">Bringing Nature's Beauty to your Door</h1>
          <p className="hero-desc">
            Thoughtfully designed floral arrangements for every moment, from everyday smiles to
            life's most special occaisions.
          </p>
        </div>
        <div className="track">
          {[...images, ...images].map((img) => (
            <div className="item" key={img}>
              <img className="heroimg" src={`${img}.webp`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
