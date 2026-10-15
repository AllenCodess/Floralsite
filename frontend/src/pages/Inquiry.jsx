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
              <h1 className="top-header">
                WEDDINGS & ENGAGEMENTS <span className="inquiries-span">Inquiries</span>
              </h1>
              <hr className="inquiry-divider" />
              <p className="top-desc">
                Let us be a part of your most meaningful moments. From intimate proposals to
                unforgettable wedding celebrations, we create customfloral designs that bring your
                vision to life.
              </p>
            </div>
            <img className="inquiry-img" src="/public/gallery 14.jpeg" alt="" />
          </div>
          <div className="inquiry-right">
            <img className="inquiry-img" src="/public/cta5.jpeg" alt="" />
            <div className="top-container">
              <h1 className="bottom-header">SIMPLE STEPS TO GET STARTED</h1>
              <hr className="inquiry-divider" />
              <div className="inquiry-steps">
                <h3 className="steps-header">REACH OUT</h3>
                <p className="steps-desc">
                  Send Us an email with your event details, including the date, location, and a bit
                  about your vision.
                </p>
              </div>
              <div className="inquiry-steps">
                <h3 className="steps-header">Let's Discuss</h3>
                <p className="steps-desc">
                  We'll be in touch to learn more, answer any questions, and talk through ideas and
                  options.
                </p>
              </div>
              <div className="inquiry-steps">
                <h3 className="steps-header">Create together</h3>
                <p className="steps-desc">
                  Once we have the details, we'll design a custom floral plan tailored to your
                  unique celebration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InquiryPage;
