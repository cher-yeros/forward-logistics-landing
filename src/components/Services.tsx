"use client";

import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });

    // Clean up on component unmount
    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <>
      <section id="onfocus" className="onfocus section dark-background">
        <div className="container-fluid p-0 " data-aos="fade-up">
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
                      Access to legitimate and legally registered transporters
                      and drivers.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>Access to insured transporters.</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Full mobile accessibility and dedicated call center
                      support for convenience.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Capability to register flaws and item conditions at
                      loading to avoid disputes at delivery.
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
                <a href="#" className="read-more align-self-start">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* For Drivers  */}
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="content d-flex flex-column justify-content-center h-100">
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
                      Enables transporters and drivers to have complete details
                      of items they carry including quantity, picture, type etc.
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
                      Ability for transporters to have full detail of the
                      shipment before committing.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Avoids possible disputes on delivering shipments.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Assist drivers to handle consolidation efficiently.
                    </span>
                  </li>
                </ul>
                <a href="#" className="read-more align-self-start">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-6 video-play position-relative">
              <a
                href="https://www.youtube.com/watch?v=s5PG9Sahj8g"
                className="glightbox pulsating-play-btn"
              ></a>
            </div>
          </div>

          {/* For Transporters  */}
          <div className="row g-0 drk-bg">
            <div className="col-lg-6 video-play position-relative">
              <a
                href="https://www.youtube.com/watch?v=s5PG9Sahj8g"
                className="glightbox pulsating-play-btn"
              ></a>
            </div>
            <div className="col-lg-6">
              <div className="content d-flex flex-column justify-content-center h-100">
                <h3>Our service benefits to Transporters</h3>
                <p className="fst-italic">
                  Gain complete control and visibility over your transportation
                  operations with Forward Logistics Ethiopia.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Access to verified shipment requests from trusted
                      consignors across the country.
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
                      Monitor ongoing deliveries and respond to incidents as
                      they happen.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Receive performance feedback from consignors to build
                      trust and reputation.
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
                <a href="#" className="read-more align-self-start">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
