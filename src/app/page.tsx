"use client";

import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Footer from "@/components/layout/Footer";
import MobileApps from "@/components/MobileApps";
import RecentNews from "@/components/News/RecentNews";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />

      {/* <Companies /> */}

      <About />

      <MobileApps />

      <Services />

      <Partners />

      <Testimonials />

      <RecentNews />

      {/* <Gallery /> */}

      {/* <FAQs /> */}

      <Contact />
    </>
  );
}
