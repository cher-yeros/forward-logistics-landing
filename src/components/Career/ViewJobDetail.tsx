"use client";

import Aos from "aos";
import React, { useEffect } from "react";

export default function ViewJobDetail() {
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
          <h1>Frontend Developer</h1>
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
              <li className="current">Frontend Developer</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* <!-- Event Section --> */}
      <section id="event" className="event section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-8">
              <div
                className="event-meta mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="meta-item">
                      <i className="bi bi-briefcase"></i>
                      <span>Full-time</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="meta-item">
                      <i className="bi bi-geo-alt"></i>
                      <span>Remote/Office</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="meta-item">
                      <i className="bi bi-cash-stack"></i>
                      <span>Competitive Salary</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="event-content"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h2>PHP Developer</h2>
                <p>
                  Forward Technologies is a leading software development and
                  talent outsourcing company in the BPO sector. We are looking
                  for a skilled PHP Developer to join our growing team. If you
                  have a passion for coding and want to work in a dynamic,
                  fast-paced environment, we invite you to apply!
                </p>

                <h3 className="mt-4">Key Responsibilities</h3>
                <ul className="event-highlights">
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Develop, test, and maintain high-quality PHP-based
                      applications and websites
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Collaborate with cross-functional teams to design and
                      implement scalable solutions
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Write clean, efficient, and well-documented code
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Troubleshoot and resolve issues in existing applications
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Ensure the best possible performance, quality, and
                      responsiveness of applications
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Stay updated with the latest industry trends and
                      technologies
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Participate in code reviews and contribute to team
                      knowledge sharing
                    </span>
                  </li>
                </ul>

                <h3 className="mt-4">Qualifications</h3>
                <ul className="event-highlights">
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Bachelor's degree in Computer Science, Information
                      Technology, or related field
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      2-3 years proven experience in PHP development, with a
                      strong portfolio
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>Familiarity with PHP frameworks such as Laravel</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Experience with MySQL or other relational databases
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Solid understanding of front-end technologies like HTML,
                      CSS, JavaScript, jQuery, and React
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Knowledge of version control systems, such as Git
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Strong problem-solving skills and attention to detail
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Ability to work both independently and as part of a team
                      in an Agile environment
                    </span>
                  </li>
                </ul>

                <h3 className="mt-4">Preferred Skills</h3>
                <ul className="event-highlights">
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Experience with RESTful APIs and third-party integrations
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Familiarity with cloud platforms such as AWS, Google
                      Cloud, or Azure
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Knowledge of web security and performance optimization
                      techniques
                    </span>
                  </li>
                </ul>

                <h3 className="mt-4">Why Join Us?</h3>
                <ul className="event-highlights">
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>Competitive salary</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>Flexible work environment</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Opportunities for professional growth and development
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Be part of a dynamic, innovative team shaping the future
                      of software development
                    </span>
                  </li>
                </ul>

                <div className="organizer-content">
                  <p>
                    If you're excited about this opportunity, we want to hear
                    from you!
                  </p>

                  <a
                    href="https://forms.gle/yRd2uY6zzAbJUDPy5"
                    className="btn btn-primary btn-custom mt-3 w-100 inline-block"
                    target="_blank"
                  >
                    Start Application
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="event-sidebar">
                <div
                  className="sidebar-widget organizer-info"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <h3>Apply Now</h3>
                  <div className="organizer-details">
                    <div className="organizer-image">
                      <img
                        src="/assets/flt_black_logo.png"
                        className="img-fluid rounded"
                        alt="Forward Technologies"
                      />
                    </div>
                    <div className="organizer-content">
                      <h4>Forward Technologies</h4>
                      <p className="organizer-position">
                        Software Development & Talent Outsourcing
                      </p>
                      <p>
                        If you're excited about this opportunity, we want to
                        hear from you!
                      </p>
                      <div className="organizer-contact">
                        <p>
                          <i className="bi bi-envelope"></i>{" "}
                          careers@forwarchlogisiticsethiopia.com
                        </p>
                        <p>
                          <i className="bi bi-globe"></i>{" "}
                          www.forwarchlogisiticsethiopia.com/careers
                        </p>
                      </div>
                      <a
                        href="https://forms.gle/yRd2uY6zzAbJUDPy5"
                        className="btn btn-primary btn-custom mt-3 w-100"
                        target="_blank"
                      >
                        Submit Application
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="sidebar-widget related-events"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <h3>Other Open Positions</h3>
                  <div className="related-event-item">
                    <div className="related-event-date">
                      <i className="bi bi-code-square"></i>
                    </div>
                    <div className="related-event-info">
                      <h4>Frontend Developer</h4>
                      <p>
                        <i className="bi bi-geo-alt"></i> Remote/Office
                      </p>
                    </div>
                  </div>
                  <div className="related-event-item">
                    <div className="related-event-date">
                      <i className="bi bi-database"></i>
                    </div>
                    <div className="related-event-info">
                      <h4>Database Administrator</h4>
                      <p>
                        <i className="bi bi-geo-alt"></i> Office-based
                      </p>
                    </div>
                  </div>
                  <div className="related-event-item">
                    <div className="related-event-date">
                      <i className="bi bi-phone"></i>
                    </div>
                    <div className="related-event-info">
                      <h4>Mobile App Developer</h4>
                      <p>
                        <i className="bi bi-geo-alt"></i> Remote
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /Event Section --> */}
    </section>
  );
}
