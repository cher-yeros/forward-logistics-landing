"use client";

import Aos from "aos";
import Link from "next/link";
import React, { useEffect } from "react";

export default function News() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section id="recent-news" className="recent-news section">
      <div
        className="page-title dark-background"
        style={{ backgroundImage: "url(assets/img/education/showcase-1.webp)" }}
      >
        <div className="container position-relative">
          <h1>News & Blogs</h1>
          <p>
            Stay updated with the latest developments, innovations, and success
            stories from Forward Logistics.
          </p>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="current">News</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="row gy-4">
            {newsArticles.map((article) => (
              <div
                key={article.id}
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={article.aosDelay}
              >
                <article>
                  <div className="post-img">
                    <img
                      src={article.imageSrc}
                      alt={article.imageAlt}
                      className="img-fluid"
                    />
                  </div>

                  <p className="post-category">{article.category}</p>

                  <h2 className="title">
                    <Link href={article.link}>{article.title}</Link>
                  </h2>

                  {/* Added description */}
                  <p className="post-description mt-2">
                    {article.description?.substring(0, 100)}...
                    <a href={article.link}>Learn more</a>
                  </p>

                  <div className="d-flex align-items-center">
                    <img
                      src={article.authorImage}
                      alt={`Author ${article.authorName}`}
                      className="img-fluid post-author-img flex-shrink-0"
                    />
                    <div className="post-meta">
                      <p className="post-author">{article.authorName}</p>
                      {article.authorRole && (
                        <p className="post-author-role text-muted small">
                          {article.authorRole}
                        </p>
                      )}
                      <p className="post-date">
                        <time dateTime={article.date}>
                          {article.displayDate}
                        </time>
                      </p>
                    </div>
                  </div>

                  {/* Added tags */}
                  {article.tags && (
                    <div className="post-tags mt-3">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="badge bg-light text-dark me-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </div>
            ))}
          </div>

          <div
            className="col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <article>
              <div className="post-img">
                <img
                  src="assets/img/blog/blog-post-2.webp"
                  alt="Fleet Tracking"
                  className="img-fluid"
                />
              </div>

              <p className="post-category">Technology</p>

              <h2 className="title">
                <Link href="/news/real-time-fleet-tracking">
                  Real-Time Fleet Tracking Now Live Across All Routes
                </Link>
              </h2>

              <div className="d-flex align-items-center">
                <img
                  src="assets/img/person/person-m-3.webp"
                  alt="Author"
                  className="img-fluid post-author-img flex-shrink-0"
                />
                <div className="post-meta">
                  <p className="post-author">Yonas Alemu</p>
                  <p className="post-date">
                    <time dateTime="2025-04-28">Apr 28, 2025</time>
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div
            className="col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <article>
              <div className="post-img">
                <img
                  src="assets/img/blog/blog-post-3.webp"
                  alt="Leadership Announcement"
                  className="img-fluid"
                />
              </div>

              <p className="post-category">Leadership</p>

              <h2 className="title">
                <Link href="/news/real-time-fleet-tracking">
                  Ato Mesfin Desta Appointed as New COO of Forward Logistics
                </Link>
              </h2>

              <div className="d-flex align-items-center">
                <img
                  src="assets/img/person/person-m-6.webp"
                  alt="Author"
                  className="img-fluid post-author-img flex-shrink-0"
                />
                <div className="post-meta">
                  <p className="post-author">Hanna Worku</p>
                  <p className="post-date">
                    <time dateTime="2025-03-20">Mar 20, 2025</time>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        {/* <!-- End recent posts list --> */}
      </div>
    </section>
  );
}

const newsArticles = [
  {
    id: 1,
    imageSrc: "assets/img/blog/blog-post-1.webp",
    imageAlt: "Warehouse Automation",
    category: "Operations",
    title: "Forward Logistics Launches Automated Warehouse in Addis Ababa",
    description:
      "Forward Logistics has inaugurated its state-of-the-art automated warehouse facility in Addis Ababa, marking a significant milestone in Ethiopia's logistics sector. The new facility features robotic sorting systems, AI-powered inventory management, and climate-controlled storage zones, boosting efficiency by 40% compared to traditional warehouses. This investment supports Ethiopia's growing e-commerce sector and positions Addis Ababa as a regional logistics hub.",
    link: "/news/automated-warehouse-launch",
    authorImage: "assets/img/person/person-m-3.webp",
    authorName: "Kalkidan Tadesse",
    authorRole: "Logistics Correspondent",
    date: "2025-05-15",
    displayDate: "May 15, 2025",
    aosDelay: "100",
    tags: ["automation", "innovation", "e-commerce"],
  },
  {
    id: 2,
    imageSrc: "assets/img/blog/blog-post-2.webp",
    imageAlt: "Fleet Tracking",
    category: "Technology",
    title: "Real-Time Fleet Tracking Now Live Across All Routes",
    description:
      "Our cutting-edge GPS tracking system is now fully operational across all Forward Logistics delivery routes. The technology provides minute-by-minute updates on vehicle locations, route optimization, and delivery ETAs. Customers can now track shipments in real-time through our mobile app, while dispatchers gain enhanced tools for fleet management. Early results show a 25% improvement in on-time deliveries and reduced fuel consumption.",
    link: "/news/real-time-fleet-tracking",
    authorImage: "assets/img/person/person-m-3.webp",
    authorName: "Yonas Alemu",
    authorRole: "Technology Editor",
    date: "2025-04-28",
    displayDate: "Apr 28, 2025",
    aosDelay: "200",
    tags: ["GPS", "telematics", "customer experience"],
  },
  {
    id: 3,
    imageSrc: "assets/img/blog/blog-post-3.webp",
    imageAlt: "Leadership Announcement",
    category: "Leadership",
    title: "Ato Mesfin Desta Appointed as New COO of Forward Logistics",
    description:
      "Forward Logistics welcomes Ato Mesfin Desta as Chief Operations Officer, bringing 15 years of supply chain leadership experience from multinational logistics firms. His appointment signals our commitment to operational excellence as we expand across East Africa. Ato Mesfin's first initiative will be implementing sustainable logistics practices to reduce our carbon footprint while maintaining service quality.",
    link: "/news/new-coo-appointment",
    authorImage: "assets/img/person/person-m-6.webp",
    authorName: "Hanna Worku",
    authorRole: "Business Reporter",
    date: "2025-03-20",
    displayDate: "Mar 20, 2025",
    aosDelay: "300",
    tags: ["management", "sustainability", "expansion"],
  },
];
