import { Link } from "react-router";

import Footer from "./../components/Footer";

const AboutPage = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-left">
          <div className="about-text-container">
            <h4 className="about-subheader">ABOUT US</h4>
            <h1 className="about-header">Flowers made for life's meaningful moments.</h1>
            <p className="about-desc">
              DaisyInTheGarden creates thoughtfully designed floral arrangements for celebrations,
              milestones, and everyday moments. What began with a love for fresh, beautiful blooms
              has grown into a passion for creating designs that feel personal, memorable, and
              special.
            </p>
            <p className="about-desc">
              Each arrangement is carefully crafted with attention to color, detail, and
              presentation because we believe flowers should feel just as meaningful as the moment
              they’re given for.
            </p>
            <button className="cta-btn">
              <Link className="nav-links" to="/shop">
                SHOP ALL
              </Link>
            </button>
          </div>
        </div>
        <div className="about-right">
          <img className="about-img" src="/public/hero10.webp" alt="" />
          <img className="floral-about" src="/public/floral.png" alt="" />
          <div className="div-pink-bg"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
