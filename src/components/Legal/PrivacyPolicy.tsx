"use client";

import Aos from "aos";
import React, { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section id="privacy" className="privacy section">
      <div
        className="page-title dark-background"
        style={{ backgroundImage: "url(assets/img/logistics/showcase-1.webp)" }}
      >
        <div className="container position-relative">
          <h1>Privacy Policy</h1>
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
              <li className="current">Privacy Policy</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container" data-aos="fade-up">
        {/* */}
        <div className="privacy-header" data-aos="fade-up">
          <div className="header-content">
            <div className="last-updated">Effective Date: Sept 20, 2024</div>
            <h1>Privacy Policy</h1>
            <p className="intro-text">
              Forward Logistics ("we," "us," or "our") values your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our digital logistics
              platform ("the Service") available on Google Play. By using our
              Service, you consent to the collection and use of your information
              in accordance with this Privacy Policy.
            </p>
          </div>
        </div>
        {/* */}
        <div className="privacy-content" data-aos="fade-up">
          {/* */}
          <div className="content-section">
            <h2>1. Introduction</h2>
            <p>
              When you use our services, you're trusting us with your
              information. We understand this is a big responsibility and work
              hard to protect your information and put you in control.
            </p>
            <p>
              This Privacy Policy is meant to help you understand what
              information we collect, why we collect it, and how you can update,
              manage, export, and delete your information.
            </p>
          </div>

          {/* */}
          <div className="content-section">
            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>
              While using our Service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you. This may include, but is not limited to:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Address</li>
              <li>Payment information</li>
              <li>Location</li>
            </ul>
          </div>

          {/* */}
          <div className="content-section">
            <h2>3. How We Use Your Information</h2>
            <p>
              We may use the information we collect from you in the following
              ways:
            </p>
            <ul>
              <li>To provide, operate, and maintain our Service</li>
              <li>To improve, personalize, and expand our Service</li>
              <li>To understand and analyze how you use our Service</li>
              <li>
                To develop new products, services, features, and functionality
              </li>
              <li>
                To communicate with you, either directly or through one of our
                partners
              </li>
              <li>
                To process your transactions and send you related information
              </li>
              <li>To find and prevent fraud</li>
            </ul>
          </div>

          {/* */}
          <div className="content-section">
            <h2>4. Location Data Policy</h2>
            <p>
              Our application utilizes location information obtained from users’
              mobile devices to enhance our logistics services. Specifically, we
              use this location data to enable our drivers to easily locate and
              pick up shipments from our consignors.
            </p>
            <p>
              Our drivers (part of the Forward Logistics Platform Driver Mobile
              application users) access the location information to find the
              precise pickup locations of the consignors for shipments, ensuring
              efficient and timely service. This location might be the current
              location of the consignor or another landmark that might be typed
              and located using Google Maps.
            </p>
          </div>

          {/* */}
          <div className="content-section">
            <h2>5. Disclosure of Your Information</h2>
            <p>We may share your information in the following situations:</p>

            <h3>With Service Providers:</h3>
            <p>
              We may share your information with third-party vendors, service
              providers, contractors, or agents who perform services for us or
              on our behalf.
            </p>

            <h3>For Business Transfers:</h3>
            <p>
              We may share or transfer your information in connection with, or
              during negotiations of, any merger, sale of company assets,
              financing, or acquisition of all or a portion of our business to
              another company.
            </p>

            <h3>For Legal Reasons:</h3>
            <p>
              We may disclose your information if required to do so by law or in
              response to valid requests by public authorities.
            </p>

            <p>We will not share your information with:</p>

            <h3>Third-Party:</h3>
            <p>
              We do not share location information with any third-party
              applications or systems. The data is used exclusively within our
              application to facilitate seamless and transparent logistics
              operations.
            </p>

            <h3>Affiliates:</h3>
            <p>
              We do not share your information with our affiliates, in which
              case we will require those affiliates to honor this Privacy
              Policy.
            </p>
          </div>

          {/* */}
          <div className="content-section">
            <h2>6. Security of Your Information</h2>
            <p>
              The security of your information is important to us, and we strive
              to implement and maintain reasonable, commercially acceptable
              security procedures and practices appropriate to the nature of the
              information we store to protect it from unauthorized access,
              destruction, use, modification, or disclosure.
            </p>
            <p>
              However, please remember that no method of transmission over the
              Internet, or method of electronic storage, is 100% secure, and we
              cannot guarantee its absolute security.
            </p>
          </div>

          {/* */}
          <div className="content-section">
            <h2>7. Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have the following data
              protection rights:
            </p>
            <ul>
              <li>
                The right to access – You have the right to request copies of
                your personal information.
              </li>
              <li>
                The right to rectification – You have the right to request that
                we correct any information you believe is inaccurate or
                incomplete.
              </li>
              <li>
                The right to erasure – You have the right to request that we
                erase your personal information, under certain conditions.
              </li>
              <li>
                The right to restrict processing – You have the right to request
                that we restrict the processing of your personal information,
                under certain conditions.
              </li>
              <li>
                The right to data portability – You have the right to request
                that we transfer the data that we have collected to another
                organization, or directly to you, under certain conditions.
              </li>
            </ul>
          </div>

          {/* */}
          <div className="content-section">
            <h2>8. Data Retention and Deletion</h2>
            <h3>Retention Policy</h3>
            <p>
              We retain your personal data only as long as necessary for the
              purposes outlined in this Privacy Policy or as required by law.
              Personal data related to your account is retained until your
              account is deleted or upon request for deletion. Transactional
              data is retained for legal, financial, or auditing purposes for
              the legally mandated retention period.
            </p>

            <h3>Deletion Policy</h3>
            <p>
              You can request deletion of your personal data at any time. Upon
              such requests, we will delete or anonymize your personal data,
              unless it is required to retain it for legal or operational
              purposes. To request data deletion, contact us at
              info@matrixet.com.
            </p>
          </div>

          {/* */}
          <div className="content-section">
            <h2>9. Commitment to User Privacy</h2>
            <p>
              We are committed to protecting your privacy and ensuring that your
              location information is handled responsibly and securely.
            </p>
          </div>

          {/* */}
          <div className="content-section">
            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </div>
          <div className="content-section">
            <h2>Conclusion</h2>
            <p>
              Your privacy is important to us, and we are committed to
              protecting your personal information. By using our Service, you
              acknowledge that you have read and understood this Privacy Policy
              and agree to its terms.
            </p>
          </div>
        </div>

        {/* */}
        <div className="privacy-contact" data-aos="fade-up">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us:
          </p>
          <div className="contact-details">
            <p>
              <strong>Email:</strong> info@matrixet.com
            </p>
            <p>
              <strong>Phone:</strong> +251116663766, +251911624074
            </p>
            <p>
              <strong>Address:</strong> MDT Building, 3rd Floor, Rwanda Embassy
              Street, Bole Subcity, Addis Ababa, Ethiopia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
