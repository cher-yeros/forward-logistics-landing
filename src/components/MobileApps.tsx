import React from "react";

export default function MobileApps() {
  return (
    <section id="work-process" className="work-process section">
      {/* <!-- Section Title --> */}
      <div className="container section-title " data-aos="fade-up">
        <h2>Forward Mobile Applications</h2>
        <p>
          Our suite of mobile apps empowers consignors, drivers, and
          transporters with seamless logistics tools and real-time visibility.
        </p>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container " data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5">
          {/* Forward Consignor App */}
          <div className="col-lg-4 " data-aos="fade-up" data-aos-delay="200">
            <div className="steps-item">
              <div className="steps-image">
                <img
                  src="assets/img/apps/app1.webp"
                  alt="Forward Consignor"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
              <div className="steps-content">
                <div className="steps-number">01</div>
                <h3>Forward Consignor</h3>
                <p>
                  Plan and manage your shipments with full control and
                  visibility, directly from your smartphone.
                </p>
                <div className="steps-features">
                  <div className="feature-item">
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Select transporters by price, service, or rating
                    </span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle"></i>
                    <span>Real-time shipment tracking</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle"></i>
                    <span>Schedule shipments anytime</span>
                  </div>
                </div>

                <div className="d-flex mt-4 justify-content-center justify-content-md-start">
                  <a href="#" className="download-btn">
                    <i className="bi bi-google-play"></i>{" "}
                    <span>Google Play</span>
                  </a>
                  <a href="#" className="download-btn">
                    <i className="bi bi-apple"></i> <span>App Store</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Forward Driver App */}
          <div className="col-lg-4 " data-aos="fade-up" data-aos-delay="300">
            <div className="steps-item">
              <div className="steps-image">
                <img
                  src="assets/img/apps/app1.webp"
                  alt="Forward Driver"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
              <div className="steps-content">
                <div className="steps-number">02</div>
                <h3>Forward Driver</h3>
                <p>
                  Helping drivers stay productive, avoid empty trips, and manage
                  routes and deliveries efficiently.
                </p>
                <div className="steps-features">
                  <div className="feature-item">
                    <i className="bi bi-check-circle"></i>
                    <span>View current & upcoming shipments</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle"></i>
                    <span>Receive dispatch & delivery notes</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle"></i>
                    <span>Report delivery conditions easily</span>
                  </div>
                </div>

                <div className="d-flex mt-4 justify-content-center justify-content-md-start">
                  <a href="#" className="download-btn">
                    <i className="bi bi-google-play"></i>{" "}
                    <span>Google Play</span>
                  </a>
                  <a href="#" className="download-btn">
                    <i className="bi bi-apple"></i> <span>App Store</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Forward Transporter App */}
          <div className="col-lg-4 " data-aos="fade-up" data-aos-delay="400">
            <div className="steps-item">
              <div className="steps-image">
                <img
                  src="assets/img/apps/app1.webp"
                  alt="Forward Transporter"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
              <div className="steps-content">
                <div className="steps-number">03</div>
                <h3>Forward Transporter</h3>
                <p>
                  Empower transport companies with tools to manage trucks,
                  drivers, and contracts on the go.
                </p>
                <div className="steps-features">
                  <div className="feature-item">
                    <i className="bi bi-check-circle"></i>
                    <span>Assign drivers to shipments</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle"></i>
                    <span>Monitor deliveries in real-time</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle"></i>
                    <span>Access performance reports</span>
                  </div>
                </div>

                <div className="d-flex mt-4 justify-content-center justify-content-md-start">
                  <a href="#" className="download-btn">
                    <i className="bi bi-google-play"></i>{" "}
                    <span>Google Play</span>
                  </a>
                  <a href="#" className="download-btn">
                    <i className="bi bi-apple"></i> <span>App Store</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
