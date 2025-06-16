"use client";

import Aos from "aos";
import { useEffect } from "react";

export default function AboutPage() {
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
      {/* <!-- Page Title --> */}
      <div
        className="page-title dark-background"
        style={{ backgroundImage: "url(assets/img/education/showcase-1.webp)" }}
      >
        <div className="container position-relative">
          <h1>About Us</h1>
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
              <li className="current">About</li>
            </ol>
          </nav>
        </div>
      </div>

      <section
        id="about"
        className="about section gray-background section-hero "
      >
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
                shipping services and for drivers and transporters to benefit
                from increased revenue.
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
                  digital freight platform that delivers efficiency,
                  transparency, and profitability for all.
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
                  driving sustainable economic growth through innovation and
                  smart transportation systems.
                </p>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="value-card h-100">
                <div className="card-icon">
                  <i className="bi bi-star"></i>
                </div>
                <h3>Our Goal</h3>
                <p>
                  Transparency, Accountability, Innovation, Customer Success,
                  and Social Impact—these principles guide everything we do at
                  Forward Logistics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- History Section --> */}
      <section
        id="history"
        className="history section dark-background section-hero"
      >
        <img
          className="hero-img"
          src="https://bootstrapmade.com/content/demo/Logis/assets/img/features-1.jpg"
          alt=""
        />

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div
                className="about-content"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Our Story</h3>
                <h2>Empowering Logistics Through Technology</h2>
                <p>
                  Forward Logistics was founded with a mission to revolutionize
                  the way goods move across Ethiopia and beyond. By combining
                  local expertise with global best practices and cutting-edge
                  technology, we've created a seamless ecosystem that serves
                  shippers, transporters, and consignees with speed,
                  transparency, and reliability.
                </p>

                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>2020</h4>
                      <p>
                        Company founded with a focus on solving fragmented
                        transportation challenges through digital innovation.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>2021</h4>
                      <p>
                        Launched Forward Driver and Transporter mobile apps,
                        enabling real-time trip assignment, tracking, and
                        payment.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>2023</h4>
                      <p>
                        Expanded to multiple Ethiopian regions. Introduced
                        Forward Consigner platform for load requests and
                        shipment visibility.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>2025</h4>
                      <p>
                        Established Forward Logistics as Ethiopia’s leading
                        digital logistics provider — supporting FMCGs,
                        manufacturers, and SMEs with end-to-end freight
                        solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="about-image"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <img
                  src="assets/img/education/campus-5.webp"
                  alt="Campus"
                  className="img-fluid rounded"
                />

                <div
                  className="mission-vision"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="mission">
                    <h3>Our Mission</h3>
                    <p>
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia curae; Donec velit neque, auctor
                      sit amet aliquam vel, ullamcorper sit amet ligula.
                    </p>
                  </div>

                  <div className="vision">
                    <h3>Our Vision</h3>
                    <p>
                      Nulla porttitor accumsan tincidunt. Mauris blandit aliquet
                      elit, eget tincidunt nibh pulvinar a. Cras ultricies
                      ligula sed magna dictum porta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-12">
              <div
                className="core-values"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <h3 className="text-center mb-4">Core Values</h3>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                  <div className="col">
                    <div className="value-card">
                      <div className="value-icon">
                        <i className="bi bi-truck"></i>
                      </div>
                      <h4>Operational Excellence</h4>
                      <p>
                        We ensure every shipment is delivered with precision,
                        speed, and accountability.
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="value-card">
                      <div className="value-icon">
                        <i className="bi bi-diagram-3"></i>
                      </div>
                      <h4>Dependability</h4>
                      <p>
                        Forward Logistics is a trusted partner, committed to
                        on-time and secure deliveries across Ethiopia.
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="value-card">
                      <div className="value-icon">
                        <i className="bi bi-cpu"></i>
                      </div>
                      <h4>Smart Technology</h4>
                      <p>
                        We leverage digital tools and automation to simplify
                        logistics and empower our clients.
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="value-card">
                      <div className="value-icon">
                        <i className="bi bi-compass"></i>
                      </div>
                      <h4>Community Focus</h4>
                      <p>
                        Our roots are local. We proudly support and grow with
                        Ethiopian businesses and communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Leadership Section --> */}
      <section id="leadership" className="leadership section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row mb-5">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h3 className="section-subtitle">Meet Our Leadership</h3>
              <h2 className="section-heading">
                Experts Driving Innovation in Technology and Logistics
              </h2>
              <p className="section-description">
                At Forward Logistics, our leadership team brings deep expertise
                across supply chain management, software engineering, and
                transportation infrastructure. With over two decades of proven
                impact, we deliver tech-powered logistics solutions that improve
                efficiency, transparency, and profitability for our clients.
              </p>
              <div className="stats-container mt-4">
                <div className="row">
                  <div className="col-md-4 col-6">
                    <div className="stat-item">
                      <h3>20+</h3>
                      <p>Years of Industry Experience</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="stat-item">
                      <h3>50+</h3>
                      <p>Technology & Logistics Experts</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="stat-item">
                      <h3>99%</h3>
                      <p>Client Satisfaction Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <div className="about-image">
                <img
                  src="assets/img/education/teacher-1.webp"
                  alt="Our Leadership Team"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>

          <div className="leadership-team">
            <div className="row">
              <div
                className="col-lg-3 col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="leader-card">
                  <div className="leader-image">
                    <img
                      src="assets/img/person/person-m-2.webp"
                      alt="Principal"
                      className="img-fluid"
                    />
                    <div className="social-links">
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-envelope"></i>
                      </a>
                    </div>
                  </div>
                  <div className="leader-info">
                    <h4>Dr. Michael Anderson</h4>
                    <p className="position">Principal</p>
                    <p className="bio">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla luctus lectus a facilisis bibendum.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="leader-card">
                  <div className="leader-image">
                    <img
                      src="assets/img/person/person-f-3.webp"
                      alt="Vice Principal"
                      className="img-fluid"
                    />
                    <div className="social-links">
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-envelope"></i>
                      </a>
                    </div>
                  </div>
                  <div className="leader-info">
                    <h4>Dr. Sarah Johnson</h4>
                    <p className="position">Vice Principal</p>
                    <p className="bio">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla luctus lectus a facilisis bibendum.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="leader-card">
                  <div className="leader-image">
                    <img
                      src="assets/img/person/person-m-5.webp"
                      alt="Dean of Students"
                      className="img-fluid"
                    />
                    <div className="social-links">
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-envelope"></i>
                      </a>
                    </div>
                  </div>
                  <div className="leader-info">
                    <h4>Prof. David Martinez</h4>
                    <p className="position">Dean of Students</p>
                    <p className="bio">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla luctus lectus a facilisis bibendum.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="leader-card">
                  <div className="leader-image">
                    <img
                      src="assets/img/person/person-f-8.webp"
                      alt="Academic Director"
                      className="img-fluid"
                    />
                    <div className="social-links">
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-envelope"></i>
                      </a>
                    </div>
                  </div>
                  <div className="leader-info">
                    <h4>Dr. Emily Chen</h4>
                    <p className="position">Academic Director</p>
                    <p className="bio">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla luctus lectus a facilisis bibendum.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div
                className="col-lg-3 col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="leader-card">
                  <div className="leader-image">
                    <img
                      src="assets/img/person/person-m-7.webp"
                      alt="Financial Director"
                      className="img-fluid"
                    />
                    <div className="social-links">
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-envelope"></i>
                      </a>
                    </div>
                  </div>
                  <div className="leader-info">
                    <h4>Robert Wilson</h4>
                    <p className="position">Financial Director</p>
                    <p className="bio">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla luctus lectus a facilisis bibendum.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="leader-card">
                  <div className="leader-image">
                    <img
                      src="assets/img/person/person-f-10.webp"
                      alt="Head of Admissions"
                      className="img-fluid"
                    />
                    <div className="social-links">
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-envelope"></i>
                      </a>
                    </div>
                  </div>
                  <div className="leader-info">
                    <h4>Jessica Parker</h4>
                    <p className="position">Head of Admissions</p>
                    <p className="bio">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla luctus lectus a facilisis bibendum.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="leader-card">
                  <div className="leader-image">
                    <img
                      src="assets/img/person/person-m-11.webp"
                      alt="IT Director"
                      className="img-fluid"
                    />
                    <div className="social-links">
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-envelope"></i>
                      </a>
                    </div>
                  </div>
                  <div className="leader-info">
                    <h4>Thomas Lee</h4>
                    <p className="position">IT Director</p>
                    <p className="bio">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla luctus lectus a facilisis bibendum.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="leader-card">
                  <div className="leader-image">
                    <img
                      src="assets/img/person/person-f-12.webp"
                      alt="Student Welfare Officer"
                      className="img-fluid"
                    />
                    <div className="social-links">
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-envelope"></i>
                      </a>
                    </div>
                  </div>
                  <div className="leader-info">
                    <h4>Amanda Rodriguez</h4>
                    <p className="position">Student Welfare Officer</p>
                    <p className="bio">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla luctus lectus a facilisis bibendum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
