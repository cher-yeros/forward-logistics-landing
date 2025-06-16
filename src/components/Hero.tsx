"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <div className="hero-container">
        <video autoPlay muted loop playsInline className="video-background">
          <source
            src="https://res.cloudinary.com/di1hpum4d/video/upload/v1749289554/forward/nfdiah2ykoy7at24ba5h.mp4"
            type="video/mp4"
          />
        </video>
        <div className="overlay"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7" data-aos="zoom-out" data-aos-delay="100">
              <div className="hero-content">
                <h1>
                  {/* Transport your shipment with a fast and reliable Platform */}
                  <Typewriter
                    words={[
                      "Transport your shipment with a fast and reliable Platform",
                      // "Transport your shipment",
                      // "with a",
                      // "fast and reliable Platform",
                      // "a",
                      // "fast",
                      // "and",
                      // "reliable",
                      // "Platform",
                    ]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    // onLoopDone={handleDone}
                    // onType={handleType}
                  />
                </h1>
                <p>
                  Download our application and handle your shipment dispatch to
                  delivery.
                </p>
                <div className="cta-buttons">
                  <a href="#" className="btn-primary">
                    Get Started
                  </a>
                  <a href="#" className="btn-secondary">
                    Discover Services
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5" data-aos="zoom-out" data-aos-delay="200">
              <div className="stats-card">
                <div className="stats-header">
                  <h3>Why Choose Us</h3>
                  <div className="decoration-line"></div>
                </div>
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-icon">
                      <i className="bi bi-truck-front-fill"></i>
                    </div>
                    <div className="stat-content">
                      <h4>10,000+</h4>
                      <p>Shipments Delivered Nationwide</p>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon">
                      <i className="bi bi-people-fill"></i>
                    </div>
                    <div className="stat-content">
                      <h4>5,000+</h4>
                      <p>Registered Freight Owners & Drivers</p>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon">
                      <i className="bi bi-phone-fill"></i>
                    </div>
                    <div className="stat-content">
                      <h4>3</h4>
                      <p>Integrated Mobile Apps</p>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon">
                      <i className="bi bi-shield-lock-fill"></i>
                    </div>
                    <div className="stat-content">
                      <h4>24/7</h4>
                      <p>Secure, Trackable Logistics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="event-ticker">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-6 col-xl-4 col-12 ticker-item">
              <div className="col">
                <span className="date">
                  <i className="bi bi-truck"></i>
                </span>
                <span className="title">Easily Find Shipment</span>
                <p style={{ paddingTop: "10px" }}>
                  Reliable delivery solutions across Ethiopia with real-time
                  tracking and expert handling.
                </p>
              </div>

              <a href="#mobile-apps" className="btn-register">
                Learn More
              </a>
            </div>
            <div className="col-md-6 col-xl-4 col-12 ticker-item">
              <div className="col">
                <span className="date">
                  <i className="bi bi-box-seam"></i>
                </span>
                <span className="title">Transport Securely</span>
                <p style={{ paddingTop: "10px" }}>
                  Reliable delivery solutions across Ethiopia with real-time
                  tracking and expert handling.
                </p>
              </div>
              <a href="#mobile-apps" className="btn-register">
                Learn More
              </a>
            </div>
            <div className="col-md-6 col-xl-4 col-12 ticker-item">
              <div className="col">
                <span className="date">
                  <i className="bi bi-geo-alt"></i>
                </span>
                <span className="title">Track Your Shipment Status</span>
                <p style={{ paddingTop: "10px" }}>
                  Reliable delivery solutions across Ethiopia with real-time
                  tracking and expert handling.
                </p>
              </div>
              <a href="#mobile-apps" className="btn-register">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
