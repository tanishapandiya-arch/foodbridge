import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">


        {/* BRAND */}

        <div className="footer-section footer-brand">

          <h2>
            FoodBridge 🌱
          </h2>

          <p>
            Connecting surplus food with people and communities
            who need it. Together, let's reduce food waste.
          </p>

          <div className="social-links">

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>

          </div>

        </div>


        {/* QUICK LINKS */}

        <div className="footer-section">

          <h3>
            Quick Links
          </h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/ngos">
            NGOs
          </Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/register">
            Join FoodBridge
          </Link>

        </div>


        {/* FOR USERS */}

        <div className="footer-section">

          <h3>
            Get Involved
          </h3>

          <Link to="/login">
            Donor Login
          </Link>

          <Link to="/register/donor">
            Donate Food
          </Link>

          <Link to="/register/ngo">
            Register NGO
          </Link>

        </div>


        {/* CONTACT */}

        <div className="footer-section">

          <h3>
            Contact Us
          </h3>

          <p>
            📞 +91 98765 43210
          </p>

          <p>
            ✉️ contact@foodbridge.com
          </p>

          <p>
            📍 India
          </p>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 FoodBridge. All rights reserved.
        </p>

        <div>

          <span>
            Privacy Policy
          </span>

          <span>
            Terms & Conditions
          </span>

        </div>

      </div>

    </footer>

  );

}

export default Footer;