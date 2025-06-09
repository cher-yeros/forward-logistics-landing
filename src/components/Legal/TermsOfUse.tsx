"use client";

import Aos from "aos";
import { useEffect } from "react";
export default function TermsOfUse() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section id="terms-of-service" className="terms-of-service section">
      <div
        className="page-title dark-background"
        style={{ backgroundImage: "url(assets/img/logistics/showcase-1.webp)" }}
      >
        <div className="container position-relative">
          <h1>Terms of Use</h1>
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
              <li className="current">Terms of Use</li>
            </ol>
          </nav>
        </div>
      </div>{" "}
      <div className="container" data-aos="fade-up">
        <div className="terms-hero" data-aos="fade-up">
          <span className="badge">Last Updated: September 20, 2024</span>
          <h2>Terms &amp; Conditions</h2>
          <p>
            These Terms and Conditions ("Terms") govern your access to and use
            of the Forward Logistics digital logistics platform ("the Service"),
            available on Google Play. By accessing or using the Service, you
            agree to be bound by these Terms.
          </p>
          <div className="terms-highlights">
            <div className="highlight-item">
              <i className="bi bi-truck"></i>
              <span>Efficient Deliveries</span>
            </div>
            <div className="highlight-item">
              <i className="bi bi-geo-alt"></i>
              <span>Precise Tracking</span>
            </div>
            <div className="highlight-item">
              <i className="bi bi-box-seam"></i>
              <span>Secure Shipments</span>
            </div>
          </div>
        </div>

        <div className="terms-grid" data-aos="fade-up">
          <div className="terms-card" data-aos="fade-up" data-aos-delay="100">
            <div className="card-header">
              <div className="header-icon">
                <i className="bi bi-file-text"></i>
              </div>
              <h3>Agreement to Terms</h3>
            </div>
            <div className="card-content">
              <p>
                By downloading, installing, or using the Forward Logistics
                Service, you confirm that you have read, understood, and agree
                to be bound by these Terms. If you do not agree with any part of
                these Terms, you must not use the Service.
              </p>
              <ul className="check-list">
                <li>Acceptance of terms and conditions</li>
                <li>Compliance with applicable laws and regulations</li>
                <li>Acknowledgment of service scope</li>
                <li>User responsibilities and obligations</li>
              </ul>
            </div>
          </div>

          <div className="terms-card" data-aos="fade-up" data-aos-delay="200">
            <div className="card-header">
              <div className="header-icon">
                <i className="bi bi-person-check"></i>
              </div>
              <h3>Your Rights as a User</h3>
            </div>
            <div className="card-content">
              <p>
                As a user of Forward Logistics, you have specific rights
                regarding your data and the use of our service, including:
              </p>
              <ul className="check-list">
                <li>Right to access and manage your account information</li>
                <li>
                  Protection of your personal data as per our Privacy Policy
                </li>
                <li>Right to use all features provided within the Service</li>
                <li>Ownership of your shipment data and content</li>
              </ul>
            </div>
          </div>

          <div className="terms-card" data-aos="fade-up" data-aos-delay="300">
            <div className="card-header">
              <div className="header-icon">
                <i className="bi bi-shield-x"></i>
              </div>
              <h3>Prohibited Activities</h3>
            </div>
            <div className="card-content">
              <div className="restrictions-list">
                <div className="restriction-item">
                  <i className="bi bi-x-circle"></i>
                  <span>No unauthorized access or data scraping</span>
                </div>
                <div className="restriction-item">
                  <i className="bi bi-x-circle"></i>
                  <span>No misuse of the Service for illegal purposes</span>
                </div>
                <div className="restriction-item">
                  <i className="bi bi-x-circle"></i>
                  <span>No infringement of intellectual property rights</span>
                </div>
                <div className="restriction-item">
                  <i className="bi bi-x-circle"></i>
                  <span>No disruption of service or malicious activities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="terms-points" data-aos="fade-up">
          <h3>Key Aspects of Our Service</h3>
          <div className="points-grid">
            <div className="point-item">
              <div className="point-icon">
                <i className="bi bi-clock-history"></i>
              </div>
              <div className="point-content">
                <h4>Service Availability</h4>
                <p>
                  While we strive for maximum uptime, we cannot guarantee
                  uninterrupted access to the Service and may perform
                  maintenance from time to time.
                </p>
              </div>
            </div>

            <div className="point-item">
              <div className="point-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <div className="point-content">
                <h4>Data Protection and Privacy</h4>
                <p>
                  Your personal and shipment data are handled in accordance with
                  our comprehensive Privacy Policy and all applicable data
                  protection laws.
                </p>
              </div>
            </div>

            <div className="point-item">
              <div className="point-icon">
                <i className="bi bi-pencil-square"></i>
              </div>
              <div className="point-content">
                <h4>Content and Shipment Responsibility</h4>
                <p>
                  You are responsible for the accuracy of shipment details and
                  content provided, while granting us necessary licenses to
                  facilitate logistics operations.
                </p>
              </div>
            </div>
          </div>

          <div className="terms-notices" data-aos="fade-up">
            <div className="notice-wrapper">
              <div className="notice-items">
                <div className="notice-item">
                  <div className="notice-marker">
                    <i className="bi bi-exclamation-circle"></i>
                  </div>
                  <div className="notice-content">
                    <h4>Service Modifications</h4>
                    <p>
                      We reserve the right to modify, suspend, or discontinue
                      any aspect of the Service at our discretion, with or
                      without prior notice.
                    </p>
                  </div>
                </div>

                <div className="notice-item">
                  <div className="notice-marker">
                    <i className="bi bi-exclamation-circle"></i>
                  </div>
                  <div className="notice-content">
                    <h4>Account Termination</h4>
                    <p>
                      We may terminate or suspend your account if you violate
                      these Terms, engage in fraudulent activities, or for other
                      justifiable reasons.
                    </p>
                  </div>
                </div>

                <div className="notice-item">
                  <div className="notice-marker">
                    <i className="bi bi-exclamation-circle"></i>
                  </div>
                  <div className="notice-content">
                    <h4>Updates to Terms</h4>
                    <p>
                      These Terms may be updated periodically. Your continued
                      use of the Service after any changes signifies your
                      acceptance of the new Terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="terms-contact" data-aos="fade-up">
            <div className="contact-wrapper">
              <div className="contact-content">
                <div className="contact-text">
                  <h4>Questions About These Terms?</h4>
                  <p>
                    If you have any inquiries or require clarification regarding
                    these Terms and Conditions, please don't hesitate to contact
                    our support team.
                  </p>
                </div>
                <div className="contact-actions">
                  <a href="mailto:info@matrixet.com" className="btn-primary">
                    Contact Support
                  </a>
                  <a href="#" className="btn-outline">
                    Download Terms
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
