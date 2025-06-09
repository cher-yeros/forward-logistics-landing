"use client";

import Aos from "aos";
import React, { useEffect } from "react";

export default function ServicePage() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section className="section">
      {/* <!-- Page Title --> */}
      <div
        className="page-title dark-background"
        style={{ backgroundImage: "url(assets/img/logistics/showcase-1.webp)" }}
      >
        <div className="container position-relative">
          <h1>Our Services</h1>
          <p>
            We are dedicated to driving logistics excellence across Ethiopia
            through innovation, reliability, and a commitment to timely
            delivery.
          </p>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="current">Services</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="features" className="features section">
        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Services</h2>
          <p>
            Forward Logistics is here with a digital technology to assist fast,
            secured and transparent logistics service across the nation. Our
            service is inspired to meet the 2025 Ethiopian Digital
            Transportation and resolve the intricate and complex issues faced in
            the transportation sector.
          </p>
        </div>
        {/* <!-- End Section Title --> */}

        <div className="container">
          {/* <!-- For Consigners--> */}
          <div className="row gy-4 align-items-center features-item">
            <div
              className="col-md-5 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <img
                src="/assets/img/features/cards-4.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-md-7" data-aos="fade-up" data-aos-delay="100">
              <h3>Our service benefits to consignors.</h3>
              <p className="fst-italic">
                Consignors can choose their preferred transporter by price,
                reputation, experience, and quality of service.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>
                    Avoid theft through complete visibility of your shipment
                    from loading, transportation, to dispatch.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>
                    Capability to plan your shipment—immediate or scheduled
                    delivery.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>
                    Access to legitimate and legally registered transporters and
                    drivers.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>Access to insured transporters.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>
                    Full mobile accessibility and dedicated call center support
                    for convenience.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>
                    Capability to register flaws and item conditions at loading
                    to avoid disputes at delivery.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>
                    Access to complete service quality ratings for drivers and
                    transporters.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>
                    Ability for consignors to rate service quality upon
                    delivery.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>
                    Capability to consolidate items based on their hazardous
                    level.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- For Drivers --> */}
          <div className="row gy-4 align-items-center features-item">
            <div
              className="col-md-5 order-1 order-md-2 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img
                src="/assets/img/features/cards-4.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div
              className="col-md-7 order-2 order-md-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>Our service benefits to drivers</h3>
              <p className="fst-italic">
                Platform that helps drivers plan their current and scheduled
                shipments to avoid idle or empty returns.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>
                    Avoid under-utilization of trucks by providing shipment
                    choices on round trips.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>
                    Enables transporters and drivers to have complete details of
                    items they carry including quantity, picture, type etc.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>
                    Automatically generated dispatch and delivery notes with
                    clear details.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>Keep track of revenue that the truck generates.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>
                    Ability for transporters to have full detail of the shipment
                    before committing.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>Avoids possible disputes on delivering shipments.</span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>
                    Assist drivers to handle consolidation efficiently.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- For Transporters --> */}
          <div className="row gy-4 align-items-center features-item">
            <div
              className="col-md-5 d-flex align-items-center"
              data-aos="zoom-out"
            >
              <img
                src="/assets/img/features/cards-4.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-7" data-aos="fade-up">
              <h3>Our service benefits to Transporters</h3>
              <p className="fst-italic">
                Gain complete control and visibility over your transportation
                operations with Forward Logistics Ethiopia.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>
                    Access to verified shipment requests from trusted consignors
                    across the country.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>
                    Optimize truck usage by planning both outbound and return
                    shipments.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>
                    Digitally manage and assign drivers to shipments in
                    real-time.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>
                    Monitor ongoing deliveries and respond to incidents as they
                    happen.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>
                    Receive performance feedback from consignors to build trust
                    and reputation.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>
                    Access comprehensive reports on driver performance and
                    delivery success rates.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle"></i>
                  <span>
                    Streamline communication between dispatch, drivers, and
                    customers.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="onfocus" className="onfocus section dark-background">
        <div className="container-fluid p-0" data-aos="fade-up">
          {/* For Consigners  */}
          <div className="row g-0 drk-bg">
            <div className="col-lg-6 video-play position-relative">
              <a
                href="https://www.youtube.com/watch?v=s5PG9Sahj8g"
                className="glightbox pulsating-play-btn"
              ></a>
            </div>
            <div className="col-lg-6">
              <div className="content d-flex flex-column justify-content-center h-100">
                <h3>Why Choose Forward Services?</h3>
                <p className="fst-italic">
                  Forward delivers streamlined, secure, and smart logistics
                  solutions tailored for businesses of all sizes—from
                  manufacturers to merchants.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      End-to-end shipment visibility—from dispatch to
                      delivery—reducing risk and enhancing trust.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Schedule deliveries with precision—whether immediate,
                      planned, or recurring.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Partner with verified and legally registered transporters
                      and operators.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      All shipments handled by insured carriers for added peace
                      of mind.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Mobile-first experience with full digital access and
                      responsive call center support.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Document shipment condition and discrepancies during
                      loading—ensuring clear accountability.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Access service performance ratings across all drivers and
                      transporters.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Rate and review your logistics experience after every
                      delivery—driving continuous improvement.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Consolidate items based on risk levels, handling
                      protocols, and cargo sensitivity.
                    </span>
                  </li>
                </ul>
                <a href="#" className="read-more align-self-start">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
