"use client";

import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Hirut Alemayehu",
      role: "Logistics Manager, Bole Industrial PLC",
      image: "/assets/images/testimonials/client-1.jpg",
      review:
        "Forward Logistics has completely transformed our freight operations. Their platform makes booking and tracking shipments effortless. We've cut delivery delays by 40%!",
    },
    {
      name: "Bereket Tadesse",
      role: "Fleet Owner",
      image: "/assets/images/testimonials/client-2.jpg",
      review:
        "Thanks to Forward Logistics, my drivers now get consistent jobs with transparent pricing. It’s the most reliable logistics platform I’ve worked with in Ethiopia.",
    },
    {
      name: "Selamawit Bekele",
      role: "Operations Head, Addis Exporters",
      image: "/assets/images/testimonials/client-3.jpg",
      review:
        "We now have full visibility into our supply chain thanks to their real-time tracking and intuitive dashboard. Highly recommended for export businesses!",
    },
    {
      name: "Daniel Kassa",
      role: "Independent Driver",
      image: "/assets/images/testimonials/client-4.jpg",
      review:
        "The driver app is easy to use, and payments are always on time. Forward Logistics really cares about drivers and makes the whole process smooth.",
    },
    {
      name: "Marta Yilma",
      role: "Tech Consultant",
      image: "/assets/images/testimonials/client-5.jpg",
      review:
        "As someone who has worked with many digital platforms, I’m impressed by Forward’s scalability and customer-centric design. It’s built for growth and impact.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials section">
      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>
          Our journey of innovation, impact, and transformation is best told by
          those who’ve experienced it firsthand.
        </p>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container">
        <div className="testimonial-masonry">
          {/* <!-- Testimonial 1 --> */}
          <div className="testimonial-item" data-aos="fade-up">
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>
                Partnering with your team accelerated our digital
                transformation. We’re now more agile, more efficient, and better
                positioned for the future.
              </p>
              <div className="client-info">
                <div className="client-image">
                  <img src="assets/img/person/person-f-7.webp" alt="Client" />
                </div>
                <div className="client-details">
                  <h3>Hana Tesfaye</h3>
                  <span className="position">Transformation Manager</span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div
            className="testimonial-item highlight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>
                We’ve seen tangible improvements in operational efficiency and
                customer engagement thanks to your strategic insights and
                solutions.
              </p>
              <div className="client-info">
                <div className="client-image">
                  <img src="assets/img/person/person-m-7.webp" alt="Client" />
                </div>
                <div className="client-details">
                  <h3>Meles Kebede</h3>
                  <span className="position">Chief Operations Officer</span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Testimonial 3 --> */}
          <div
            className="testimonial-item"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>
                Your innovative approach allowed us to rethink our systems and
                unlock new opportunities for scaling across East Africa.
              </p>
              <div className="client-info">
                <div className="client-image">
                  <img src="assets/img/person/person-f-8.webp" alt="Client" />
                </div>
                <div className="client-details">
                  <h3>Selamawit Abebe</h3>
                  <span className="position">Regional Growth Lead</span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Testimonial 4 --> */}
          <div
            className="testimonial-item"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>
                The collaborative mindset your team brought helped us drive
                change from the inside out — and the results speak for
                themselves.
              </p>
              <div className="client-info">
                <div className="client-image">
                  <img src="assets/img/person/person-m-8.webp" alt="Client" />
                </div>
                <div className="client-details">
                  <h3>Bereket Haile</h3>
                  <span className="position">Innovation Director</span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Testimonial 5 --> */}
          <div
            className="testimonial-item highlight"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>
                This partnership empowered us to rethink user experience, and
                the impact on our platform engagement has been phenomenal.
              </p>
              <div className="client-info">
                <div className="client-image">
                  <img src="assets/img/person/person-f-9.webp" alt="Client" />
                </div>
                <div className="client-details">
                  <h3>Meskerem Girma</h3>
                  <span className="position">UX Strategist</span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Testimonial 6 --> */}
          <div
            className="testimonial-item"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="testimonial-content">
              <div className="quote-pattern">
                <i className="bi bi-quote"></i>
              </div>
              <p>
                With your support, we turned data into action and vision into
                results — a truly transformative experience for our team.
              </p>
              <div className="client-info">
                <div className="client-image">
                  <img src="assets/img/person/person-m-13.webp" alt="Client" />
                </div>
                <div className="client-details">
                  <h3>Tamrat Yohannes</h3>
                  <span className="position">Data & Strategy Lead</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
