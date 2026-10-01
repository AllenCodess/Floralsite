const CallToAction = () => {
  return (
    <>
      <div className="ctacontainer">
        <div className="cta-left">
          <img className="ctaimg1" src="cta1.jpeg" alt="" />
          <div className="cta-left-text">
            <h1 className="cta-header">NEW ARRIVALS</h1>
            <p className="cta-desc">Fresh floral designs just added.</p>
            <button className="cta-btn">SHOP NOW</button>
          </div>
        </div>
        <div className="cta-right">
          <img className="ctaimg2" src="cta2.jpeg" alt="" />
          <div className="cta-left-text">
            <h1 className="cta-header2">BEST SELLERS</h1>
            <p className="cta-desc">Shop the arrangements everyone loves.</p>
            <button className="cta-btn">SHOP NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
