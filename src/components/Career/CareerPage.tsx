"use client";

import Aos from "aos";
import Link from "next/link";
import React, { useEffect } from "react";

export default function CareerPage() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section id="#about" className="section about">
      <div
        className="page-title dark-background"
        style={{ backgroundImage: "url(assets/img/logistics/showcase-1.webp)" }}
      >
        <div className="container position-relative">
          <h1>Job Applications</h1>
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
              <li className="current">Career</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* <!-- Academics Section --> */}
      <section id="academics" className="academics section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="intro-wrapper">
            <div className="row align-items-center">
              <div
                className="col-lg-6 mb-4 mb-lg-0"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="intro-image">
                  <img
                    src="assets/img/education/education-1.webp"
                    alt="Academic Programs"
                    className="img-fluid rounded-lg shadow"
                  />
                  <div className="accent-shape"></div>
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="intro-content">
                  <span className="subtitle">Careers at Forward</span>
                  <h2>Why Join Forward Logistics Technology?</h2>
                  <p className="intro-text">
                    At Forward, we’re not just moving goods—we’re moving the
                    future of logistics. Join a dynamic and fast-growing team
                    where innovation meets impact. If you're passionate about
                    technology, operations, and creating smarter logistics
                    solutions, Forward is the place for you.
                  </p>
                  <div className="key-highlights">
                    <div className="highlight-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>
                        Work with cutting-edge logistics and AI-driven
                        technology
                      </span>
                    </div>
                    <div className="highlight-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>
                        Be part of a purpose-driven mission with nationwide
                        impact
                      </span>
                    </div>
                    <div className="highlight-item">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>
                        Grow in a collaborative, inclusive, and fast-paced
                        environment
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="programs-navigation"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="row">
              <div className="col-12">
                <div className="program-tabs">
                  <ul
                    className="nav nav-tabs justify-content-center"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="all-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#academics-all"
                        type="button"
                        role="tab"
                      >
                        <span className="icon">
                          <i className="bi bi-grid-3x3-gap"></i>
                        </span>
                        <span className="text">All Jobs</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="fulltime-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#academics-undergraduate"
                        type="button"
                        role="tab"
                      >
                        <span className="icon">
                          <i className="bi bi-briefcase-fill"></i>
                        </span>
                        <span className="text">Full-time</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="parttime-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#academics-graduate"
                        type="button"
                        role="tab"
                      >
                        <span className="icon">
                          <i className="bi bi-clock-history"></i>
                        </span>
                        <span className="text">Part-time</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="remote-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#academics-doctoral"
                        type="button"
                        role="tab"
                      >
                        <span className="icon">
                          <i className="bi bi-laptop"></i>
                        </span>
                        <span className="text">Remote</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="tab-content programs-content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* <!-- All Jobs Tab --> */}
            <div
              className="tab-pane fade show active"
              id="academics-all"
              role="tabpanel"
            >
              <div className="row g-4">
                {/* <!-- Job Item --> */}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="program-item undergraduate">
                    <div className="program-header">
                      <div className="program-icon">
                        <i className="bi bi-code-slash"></i>
                      </div>
                      <span className="program-type">Full-time</span>
                    </div>
                    <div className="program-body">
                      <h3>Frontend Developer</h3>
                      <p>
                        We're looking for an experienced React developer to join
                        our team building modern web applications.
                      </p>
                      <ul className="program-details">
                        <li>
                          <i className="bi bi-geo-alt"></i> San Francisco
                        </li>
                        <li>
                          <i className="bi bi-cash-stack"></i> $90,000 -
                          $120,000
                        </li>
                        <li>
                          <i className="bi bi-calendar-check"></i> Posted 2 days
                          ago
                        </li>
                      </ul>
                    </div>
                    <div className="program-footer">
                      <Link
                        href="/jobs/frontend-developer"
                        className="program-link"
                      >
                        View Job <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* <!-- Job Item --> */}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="program-item graduate">
                    <div className="program-header">
                      <div className="program-icon">
                        <i className="bi bi-server"></i>
                      </div>
                      <span className="program-type">Part-time</span>
                    </div>
                    <div className="program-body">
                      <h3>Backend Engineer</h3>
                      <p>
                        Part-time position for a Node.js developer to help
                        maintain our API services.
                      </p>
                      <ul className="program-details">
                        <li>
                          <i className="bi bi-geo-alt"></i> Remote
                        </li>
                        <li>
                          <i className="bi bi-cash-stack"></i> $50 - $70/hr
                        </li>
                        <li>
                          <i className="bi bi-calendar-check"></i> Posted 1 week
                          ago
                        </li>
                      </ul>
                    </div>
                    <div className="program-footer">
                      <a
                        href="/jobs/frontend-developer"
                        className="program-link"
                      >
                        View Job <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* <!-- Job Item --> */}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="program-item doctoral">
                    <div className="program-header">
                      <div className="program-icon">
                        <i className="bi bi-palette"></i>
                      </div>
                      <span className="program-type">Remote</span>
                    </div>
                    <div className="program-body">
                      <h3>UI/UX Designer</h3>
                      <p>
                        Fully remote position for a creative designer with Figma
                        experience.
                      </p>
                      <ul className="program-details">
                        <li>
                          <i className="bi bi-geo-alt"></i> Worldwide
                        </li>
                        <li>
                          <i className="bi bi-cash-stack"></i> $80,000 -
                          $100,000
                        </li>
                        <li>
                          <i className="bi bi-calendar-check"></i> Posted 3 days
                          ago
                        </li>
                      </ul>
                    </div>
                    <div className="program-footer">
                      <a
                        href="/jobs/frontend-developer"
                        className="program-link"
                      >
                        View Job <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* <!-- Job Item --> */}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="program-item undergraduate">
                    <div className="program-header">
                      <div className="program-icon">
                        <i className="bi bi-shield-check"></i>
                      </div>
                      <span className="program-type">Full-time</span>
                    </div>
                    <div className="program-body">
                      <h3>Security Engineer</h3>
                      <p>
                        Cybersecurity specialist needed to protect our
                        infrastructure and applications.
                      </p>
                      <ul className="program-details">
                        <li>
                          <i className="bi bi-geo-alt"></i> New York
                        </li>
                        <li>
                          <i className="bi bi-cash-stack"></i> $110,000 -
                          $140,000
                        </li>
                        <li>
                          <i className="bi bi-calendar-check"></i> Posted 5 days
                          ago
                        </li>
                      </ul>
                    </div>
                    <div className="program-footer">
                      <a
                        href="/jobs/frontend-developer"
                        className="program-link"
                      >
                        View Job <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* <!-- Job Item --> */}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="program-item graduate">
                    <div className="program-header">
                      <div className="program-icon">
                        <i className="bi bi-phone"></i>
                      </div>
                      <span className="program-type">Part-time</span>
                    </div>
                    <div className="program-body">
                      <h3>Mobile Developer</h3>
                      <p>
                        Contract position for React Native developer to help
                        with app maintenance.
                      </p>
                      <ul className="program-details">
                        <li>
                          <i className="bi bi-geo-alt"></i> Chicago
                        </li>
                        <li>
                          <i className="bi bi-cash-stack"></i> $60 - $80/hr
                        </li>
                        <li>
                          <i className="bi bi-calendar-check"></i> Posted 1 day
                          ago
                        </li>
                      </ul>
                    </div>
                    <div className="program-footer">
                      <a
                        href="/jobs/frontend-developer"
                        className="program-link"
                      >
                        View Job <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* <!-- Job Item --> */}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="program-item doctoral">
                    <div className="program-header">
                      <div className="program-icon">
                        <i className="bi bi-database"></i>
                      </div>
                      <span className="program-type">Remote</span>
                    </div>
                    <div className="program-body">
                      <h3>Data Engineer</h3>
                      <p>
                        Remote position for building and maintaining our data
                        pipelines.
                      </p>
                      <ul className="program-details">
                        <li>
                          <i className="bi bi-geo-alt"></i> Worldwide
                        </li>
                        <li>
                          <i className="bi bi-cash-stack"></i> $95,000 -
                          $125,000
                        </li>
                        <li>
                          <i className="bi bi-calendar-check"></i> Posted 1 week
                          ago
                        </li>
                      </ul>
                    </div>
                    <div className="program-footer">
                      <a
                        href="/jobs/frontend-developer"
                        className="program-link"
                      >
                        View Job <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Full-time Jobs Tab --> */}
            <div
              className="tab-pane fade"
              id="academics-undergraduate"
              role="tabpanel"
            >
              <div className="row g-4">
                {/* <!-- Job Item --> */}
                <div className="col-lg-4 col-md-6" data-aos="zoom-in">
                  <div className="program-item undergraduate">
                    <div className="program-header">
                      <div className="program-icon">
                        <i className="bi bi-code-slash"></i>
                      </div>
                      <span className="program-type">Full-time</span>
                    </div>
                    <div className="program-body">
                      <h3>Frontend Developer</h3>
                      <p>
                        We're looking for an experienced React developer to join
                        our team building modern web applications.
                      </p>
                      <ul className="program-details">
                        <li>
                          <i className="bi bi-geo-alt"></i> San Francisco
                        </li>
                        <li>
                          <i className="bi bi-cash-stack"></i> $90,000 -
                          $120,000
                        </li>
                        <li>
                          <i className="bi bi-calendar-check"></i> Posted 2 days
                          ago
                        </li>
                      </ul>
                    </div>
                    <div className="program-footer">
                      <a
                        href="/jobs/frontend-developer"
                        className="program-link"
                      >
                        View Job <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* <!-- Job Item --> */}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="program-item undergraduate">
                    <div className="program-header">
                      <div className="program-icon">
                        <i className="bi bi-shield-check"></i>
                      </div>
                      <span className="program-type">Full-time</span>
                    </div>
                    <div className="program-body">
                      <h3>Security Engineer</h3>
                      <p>
                        Cybersecurity specialist needed to protect our
                        infrastructure and applications.
                      </p>
                      <ul className="program-details">
                        <li>
                          <i className="bi bi-geo-alt"></i> New York
                        </li>
                        <li>
                          <i className="bi bi-cash-stack"></i> $110,000 -
                          $140,000
                        </li>
                        <li>
                          <i className="bi bi-calendar-check"></i> Posted 5 days
                          ago
                        </li>
                      </ul>
                    </div>
                    <div className="program-footer">
                      <a
                        href="/jobs/frontend-developer"
                        className="program-link"
                      >
                        View Job <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Part-time Jobs Tab --> */}
            <div
              className="tab-pane fade"
              id="academics-graduate"
              role="tabpanel"
            >
              <div className="row g-4">
                {/* <!-- Job Item --> */}
                <div className="col-lg-4 col-md-6" data-aos="zoom-in">
                  <div className="program-item graduate">
                    <div className="program-header">
                      <div className="program-icon">
                        <i className="bi bi-server"></i>
                      </div>
                      <span className="program-type">Part-time</span>
                    </div>
                    <div className="program-body">
                      <h3>Backend Engineer</h3>
                      <p>
                        Part-time position for a Node.js developer to help
                        maintain our API services.
                      </p>
                      <ul className="program-details">
                        <li>
                          <i className="bi bi-geo-alt"></i> Remote
                        </li>
                        <li>
                          <i className="bi bi-cash-stack"></i> $50 - $70/hr
                        </li>
                        <li>
                          <i className="bi bi-calendar-check"></i> Posted 1 week
                          ago
                        </li>
                      </ul>
                    </div>
                    <div className="program-footer">
                      <a
                        href="/jobs/frontend-developer"
                        className="program-link"
                      >
                        View Job <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* <!-- Job Item --> */}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="program-item graduate">
                    <div className="program-header">
                      <div className="program-icon">
                        <i className="bi bi-phone"></i>
                      </div>
                      <span className="program-type">Part-time</span>
                    </div>
                    <div className="program-body">
                      <h3>Mobile Developer</h3>
                      <p>
                        Contract position for React Native developer to help
                        with app maintenance.
                      </p>
                      <ul className="program-details">
                        <li>
                          <i className="bi bi-geo-alt"></i> Chicago
                        </li>
                        <li>
                          <i className="bi bi-cash-stack"></i> $60 - $80/hr
                        </li>
                        <li>
                          <i className="bi bi-calendar-check"></i> Posted 1 day
                          ago
                        </li>
                      </ul>
                    </div>
                    <div className="program-footer">
                      <a
                        href="/jobs/frontend-developer"
                        className="program-link"
                      >
                        View Job <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Remote Jobs Tab --> */}
            <div
              className="tab-pane fade"
              id="academics-doctoral"
              role="tabpanel"
            >
              <div className="row g-4">
                {/* <!-- Job Item --> */}
                <div className="col-lg-4 col-md-6" data-aos="zoom-in">
                  <div className="program-item doctoral">
                    <div className="program-header">
                      <div className="program-icon">
                        <i className="bi bi-palette"></i>
                      </div>
                      <span className="program-type">Remote</span>
                    </div>
                    <div className="program-body">
                      <h3>UI/UX Designer</h3>
                      <p>
                        Fully remote position for a creative designer with Figma
                        experience.
                      </p>
                      <ul className="program-details">
                        <li>
                          <i className="bi bi-geo-alt"></i> Worldwide
                        </li>
                        <li>
                          <i className="bi bi-cash-stack"></i> $80,000 -
                          $100,000
                        </li>
                        <li>
                          <i className="bi bi-calendar-check"></i> Posted 3 days
                          ago
                        </li>
                      </ul>
                    </div>
                    <div className="program-footer">
                      <a
                        href="/jobs/frontend-developer"
                        className="program-link"
                      >
                        View Job <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* <!-- Job Item --> */}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="program-item doctoral">
                    <div className="program-header">
                      <div className="program-icon">
                        <i className="bi bi-database"></i>
                      </div>
                      <span className="program-type">Remote</span>
                    </div>
                    <div className="program-body">
                      <h3>Data Engineer</h3>
                      <p>
                        Remote position for building and maintaining our data
                        pipelines.
                      </p>
                      <ul className="program-details">
                        <li>
                          <i className="bi bi-geo-alt"></i> Worldwide
                        </li>
                        <li>
                          <i className="bi bi-cash-stack"></i> $95,000 -
                          $125,000
                        </li>
                        <li>
                          <i className="bi bi-calendar-check"></i> Posted 1 week
                          ago
                        </li>
                      </ul>
                    </div>
                    <div className="program-footer">
                      <a
                        href="/jobs/frontend-developer"
                        className="program-link"
                      >
                        View Job <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /Academics Section --> */}
    </section>
  );
}
