import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="footer position-relative dark-background">
      <div className="container footer-top">
        <div className="row gy-4">
          {/* About Section */}
          <div className="col-lg-5 col-md-6 footer-about">
            <Link href="/" className="logo d-flex align-items-center">
              <span className="sitename">Forward Logistics Technology.</span>
            </Link>
            <div className="footer-contact pt-3">
              <p>
                Forward Logistics is an institution that aims to streamline the
                country's cargo transportation system using the latest
                technology.
              </p>
              <br />
              <p>
                <strong>Address:</strong> Bole Michael, Rwanda Embassy Street,
                MDT Building 3rd Floor
              </p>
              <p>Addis Ababa, Ethiopia</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+251 116 663 766</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@matrixet.com</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Our Mobile Applications */}
          <div className="col-lg-3 col-md-3 footer-links">
            <h4>Our Mobile Applications</h4>
            <ul>
              <li>
                <a href="#">Forward Consigner</a>
              </li>
              <li>
                <a href="#">Forward Driver</a>
              </li>
              <li>
                <a href="#">Forward Transporter</a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="#about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              {/* <li>
                <Link href="#contact">Contact</Link>
              </li> */}
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-use">Terms of Use</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about">Team</Link>
              </li>
              <li>
                <Link href="#partners">Partners</Link>
              </li>
              <li>
                <Link href="/news">News & Blogs</Link>
              </li>
              <li>
                <Link href="#">Investor Relations</Link>
              </li>
              <li>
                <Link href="#">Sustainability</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container copyright text-center mt-4">
        <p>
          © <span>{new Date().getFullYear()}</span>
          <strong className="px-1 sitename"> Forward Logistics Ethiopia</strong>
          <br />
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by{" "}
          <a href="https://www.forwardlogisticsethiopia.com/">
            Forward Logistics Technology PLC
          </a>
        </div>
      </div>
    </footer>
  );
}
