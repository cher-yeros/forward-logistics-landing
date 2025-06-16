import Link from "next/link";
import React from "react";

export default function RecentNews() {
  return (
    <section id="recent-news" className="recent-news section">
      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Recent News & Blogs</h2>
        <p>
          Stay updated with the latest developments, innovations, and success
          stories from Forward Logistics.
        </p>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container">
        <div className="row gy-4">
          <div
            className="col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <article>
              <div className="post-img">
                <img
                  src="assets/img/blog/blog-post-1.webp"
                  alt="Warehouse Automation"
                  className="img-fluid"
                />
              </div>

              <p className="post-category">Operations</p>

              <h2 className="title">
                <Link href="/news/real-time-fleet-tracking">
                  Forward Logistics Launches Automated Warehouse in Addis Ababa
                </Link>
              </h2>

              <div className="d-flex align-items-center">
                <img
                  src="assets/img/person/person-m-3.webp"
                  alt="Author"
                  className="img-fluid post-author-img flex-shrink-0"
                />
                <div className="post-meta">
                  <p className="post-author">Kalkidan Tadesse</p>
                  <p className="post-date">
                    <time dateTime="2025-05-15">May 15, 2025</time>
                  </p>
                </div>
              </div>
            </article>
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
