import Footer from "./../components/Footer";

const InquiryPage = () => {
  return (
    <>
      <div className="container">
        <div className="inquiry-info">
          <div className="inquiry-text">
            <h3 className="inquiry-header">READY TO TALK ABOUT YOUR SPECIAL EVENT?</h3>
            <p className="inquiry-desc">
              For custom wedding, engagement and event floral arrangements, please reach out to us
              directly. We'd love to hear about your vision and create something beautiful together.
            </p>
            <p>Daisyemail@gmail.com</p>
          </div>
        </div>
        <div className="inquiry-top inquiry-container">
          <div className="inquiry-left">
            <div className="top-container">
              <h1 className="top-header">WEDDINGS & ENGAGEMENTS</h1>
              <p className="top-desc">
                Let us be a part of your most meaningful moments. From intimate proposals to
                unforgettable wedding celebrations, we create customfloral designs that bring your
                vision to life.
              </p>
            </div>
            <img className="inquiry-img" src="/public/gallery 14.jpeg" alt="" />
          </div>
          <div className="inquiry-right"></div>
        </div>
      </div>
    </>
  );
};

export default InquiryPage;
