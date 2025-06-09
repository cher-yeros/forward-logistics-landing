"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Header() {
  const pathname = usePathname();

  const mobileNavToggleRef = useRef<HTMLElement | null>(null);

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(`${path}/`);

  useEffect(() => {
    const toggleScrolled = () => {
      const body = document.body;
      const header = document.querySelector("#header");

      if (
        !header?.classList.contains("scroll-up-sticky") &&
        !header?.classList.contains("sticky-top") &&
        !header?.classList.contains("fixed-top")
      )
        return;

      if (window.scrollY > 100) {
        body.classList.add("scrolled");
      } else {
        body.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    const mobileToggleBtn = mobileNavToggleRef.current;

    const mobileNavToogle = () => {
      document.body.classList.toggle("mobile-nav-active");
      if (mobileToggleBtn) {
        mobileToggleBtn.classList.toggle("bi-list");
        mobileToggleBtn.classList.toggle("bi-x");
      }
    };

    if (mobileToggleBtn) {
      mobileToggleBtn.addEventListener("click", mobileNavToogle);
    }

    // Close mobile nav on link click
    const navLinks = document.querySelectorAll("#navmenu a");
    navLinks.forEach((link) =>
      link.addEventListener("click", () => {
        if (document.body.classList.contains("mobile-nav-active")) {
          mobileNavToogle();
        }
      })
    );

    // Handle dropdown toggle
    const dropdownToggles = document.querySelectorAll(
      ".navmenu .toggle-dropdown"
    );
    dropdownToggles.forEach((toggle) =>
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLElement;
        const parent = target.closest("li");
        const dropdown = parent?.querySelector("ul");
        parent?.classList.toggle("active");
        dropdown?.classList.toggle("dropdown-active");
        e.stopImmediatePropagation();
      })
    );

    return () => {
      window.removeEventListener("scroll", toggleScrolled);
      window.removeEventListener("load", toggleScrolled);
      if (mobileToggleBtn) {
        mobileToggleBtn.removeEventListener("click", mobileNavToogle);
      }
    };
  }, []);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center">
          <img src="/assets/flt_white_logo.png" alt="" />
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="/" className={pathname === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={isActive("/about") ? "active" : ""}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={isActive("/services") ? "active" : ""}
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/news" className={isActive("/news") ? "active" : ""}>
                News
              </Link>
            </li>
            <li>
              <Link
                href="/mobile-apps"
                className={isActive("/mobile-apps") ? "active" : ""}
              >
                Mobile Apps
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={isActive("/contact") ? "active" : ""}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/jobs" className={isActive("/jobs") ? "active" : ""}>
                Career
              </Link>
            </li>

            <li className="dropdown">
              <button className="btn btn-primary btn-custom">
                <span>English</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </button>
              <ul>
                <li>
                  <Link href="/lang/am">አማርኛ</Link>
                </li>
                <li>
                  <Link href="/lang/ti">ቲግሪኛ</Link>
                </li>
                <li>
                  <Link href="/lang/om">Afaan Oromoo</Link>
                </li>
                <li>
                  <Link href="/lang/so">Somali</Link>
                </li>
                <li>
                  <Link href="/lang/fr">French</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
