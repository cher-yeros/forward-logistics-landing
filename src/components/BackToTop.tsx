"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    const handleScrollTopClick = (e: Event) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollTopEl = document.getElementById("scroll-top");
    if (scrollTopEl) {
      scrollTopEl.addEventListener("click", handleScrollTopClick);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    // Preloader removal
    const removePreloader = () => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.remove();
      }
    };

    window.addEventListener("load", removePreloader);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
      window.removeEventListener("load", removePreloader);
      if (scrollTopEl) {
        scrollTopEl.removeEventListener("click", handleScrollTopClick);
      }
    };
  }, []);

  return (
    <>
      <a
        href="#"
        id="scroll-top"
        className={`scroll-top d-flex align-items-center justify-content-center ${
          showScrollTop ? "active" : ""
        }`}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* <div id="preloader"></div> */}
    </>
  );
}
