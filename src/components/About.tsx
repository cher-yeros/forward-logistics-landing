import React from "react";

export default function About() {
  return (
    <section id="about" className="about section">
      {/* <div className="container section-title" data-aos="fade-up">
        <h2>About </h2>
        <p>About Forward Logistics Ethiopia</p>
      </div> */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row mb-5">
          <div
            className="col-lg-6 pe-lg-5"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h2 className="display-6 fw-bold mb-4">
              Empowering Logistics, <span>Transforming Ethiopia</span>
            </h2>
            <p className="lead mb-4">
              Forward logistics is a technology company established to promote
              our national economic growth through cutting-edge transportation
              and help consignors get a more competitive and transparent
              shipping services and for drivers and transporters to benefit from
              increased revenue.
            </p>
            <div className="d-flex flex-wrap gap-4 mb-4">
              <div className="stat-box">
                <span className="stat-number">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="10"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  5000+
                </span>
                <span className="stat-label">Shipments Delivered</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="5000"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  200+
                </span>
                <span className="stat-label">Active Drivers</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">
                  3
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="3"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                </span>
                <span className="stat-label">Mobile Apps</span>
              </div>
            </div>
            {/* <div className="d-flex align-items-center mt-4 signature-block">
              <img
                src="assets/img/misc/ceo-signature.webp"
                alt="CEO's Signature"
                width="120"
              />
              <div className="ms-3">
                <p className="mb-0 fw-bold">Mulugeta Tesfaye</p>
                <p className="mb-0 text-muted">
                  CEO, Forward Logistics Technology
                </p>
              </div>
            </div> */}
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div className="image-stack">
              {/* <div
                className="image-stack-item image-stack-item-top"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <img
                  src="assets/img/logistics/fleet.webp"
                  alt="Fleet"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
              <div
                className="image-stack-item image-stack-item-bottom"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <img
                  src="assets/img/logistics/drivers.webp"
                  alt="Drivers"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div> */}

              <div
                className="image-stack-item image-stack-item-top"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <img
                  src="assets/img/education/campus-4.webp"
                  alt="Campus Life"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
              <div
                className="image-stack-item image-stack-item-bottom"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <img
                  src="assets/img/education/students-2.webp"
                  alt="Students"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mission-vision-row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="value-card h-100">
              <div className="card-icon">
                <i className="bi bi-rocket-takeoff"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
                To modernize logistics in Ethiopia by building a trusted,
                digital freight platform that delivers efficiency, transparency,
                and profitability for all.
              </p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="value-card h-100">
              <div className="card-icon">
                <i className="bi bi-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be Ethiopia’s most reliable logistics technology partner,
                driving sustainable economic growth through innovation and smart
                transportation systems.
              </p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="value-card h-100">
              <div className="card-icon">
                <i className="bi bi-star"></i>
              </div>
              <h3>Our Values</h3>
              <p>
                Transparency, Accountability, Innovation, Customer Success, and
                Social Impact—these principles guide everything we do at Forward
                Logistics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
