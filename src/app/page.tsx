"use client";

import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Footer from "@/components/layout/Footer";
import MobileApps from "@/components/MobileApps";
import RecentNews from "@/components/News/RecentNews";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />

      {/* <Companies /> */}

      {/* <section
        id="call-to-action"
        className="call-to-action section dark-background"
      >
        <img
          src="https://bootstrapmade.com/content/demo/Logis/assets/img/cta-bg.jpg"
          alt=""
        />

        <div className="container">
          <div
            className="row justify-content-center aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="col-xl-10">
              <div className="text-center">
                <h3>Call To Action</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <a className="cta-btn" href="#">
                  Call To Action
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <About />

      <MobileApps />

      <section
        id="features"
        className="features section section-hero dark-background"
      >
        <img
          className="hero-img"
          src="https://bootstrapmade.com/content/demo/Logis/assets/img/cta-bg.jpg"
          alt=""
        />
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
        </div>
      </section>

      <section
        id="features"
        className="features section section-hero dark-background"
      >
        <img
          className="hero-img"
          src="https://bootstrapmade.com/content/demo/Logis/assets/img/features-1.jpg"
          alt=""
        />
        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Our service benefits to Transporters.</h2>
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
              <h3>Our service benefits to Transporters.</h3>
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

      <section
        id="features"
        className="features section section-hero dark-background"
      >
        <img
          className="hero-img"
          src="https://bootstrapmade.com/content/demo/Logis/assets/img/cta-bg.jpg"
          alt=""
        />

        {/* <!-- Section Title --> */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Our service benefits to consignors.</h2>
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
        </div>
      </section>

      {/* <Services /> */}

      <Partners />

      <Testimonials />

      <RecentNews />

      {/* <Gallery /> */}

      {/* <FAQs /> */}

      <Contact />
    </>
  );
}
