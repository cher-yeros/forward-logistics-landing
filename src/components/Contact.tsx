export default function Contact() {
  return (
    <section className="section section-hero dark-background">
      <img
        className="hero-img"
        src="https://bootstrapmade.com/content/demo/Logis/assets/img/cta-bg.jpg"
        alt=""
      />

      <div className="container section-title" data-aos="fade-up">
        <h2>Contact Us </h2>
        <p>Connect with Forward Logistics Ethiopia</p>
      </div>

      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          {/* <!-- Contact Info Boxes --> */}
          <div className="row gy-4 mb-5">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-info-box">
                <div className="icon-box">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="info-content">
                  <h4>Our Address</h4>
                  <p>
                    Bole Michael, Rwanda Embassy Street, MDT Building 3rd Floor,
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="contact-info-box">
                <div className="icon-box">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="info-content">
                  <h4>Contact Address</h4>
                  <p>info@matrixet.com</p>
                  <p>+251 116 663 766</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="contact-info-box">
                <div className="icon-box">
                  <i className="bi bi-headset"></i>
                </div>
                <div className="info-content">
                  <h4>Hours of Operation</h4>
                  <p>Monday - Fri: 09 AM - 11:30 PM</p>
                  <p>Saturday: 09 AM - 12:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Google Maps (Full Width) --> */}
        <div
          className="map-section"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{ zIndex: 3 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d245.34081127108686!2d38.77499848622668!3d8.986230977521757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850062bbd22b%3A0xd03de81007558f18!2sForward%20Logistics%20Ethiopia%20PLC!5e1!3m2!1sen!2set!4v1748675460509!5m2!1sen!2set"
            width="100%"
            height="500"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* <!-- Contact Form Section (Overlapping) --> */}
        <div className="container form-container-overlap">
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="col-lg-10">
              <div className="contact-form-wrapper">
                <h2 className="text-center mb-4">Get in Touch</h2>

                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="input-with-icon">
                          <i className="bi bi-person"></i>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="First Name"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="input-with-icon">
                          <i className="bi bi-envelope"></i>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="input-with-icon">
                          <i className="bi bi-text-left"></i>
                          <input
                            type="text"
                            className="form-control"
                            name="sbject"
                            placeholder="Subject"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <div className="input-with-icon">
                          <i className="bi bi-chat-dots message-icon"></i>
                          <textarea
                            className="form-control"
                            name="message"
                            placeholder="Write Message..."
                            style={{ height: "180px" }}
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>

                    <div className="col-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-submit"
                      >
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
