import React from "react";
import "./FooterStyle.css";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footerSection">
      <div className="footer-container">
        <div className="footer-heading-section">
          <h1>zomato</h1>
          <div className="social-links">
            <FaLinkedin className="icon" />
            <FaInstagramSquare className="icon" />
            <FaTwitterSquare className="icon" />
            <FaYoutube className="icon" />
            <FaFacebookSquare className="icon" />
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-link-section">
            <ul className="footer-sublinks">
              <h3>About Zomato</h3>
              <li className="footer-list-items">
                <a href="/">Who We Are</a>
              </li>
              <li className="footer-list-items">
                <a href="/">Blog</a>
              </li>
              <li className="footer-list-items">
                <a href="/">Work With Us</a>
              </li>
              <li className="footer-list-items">
                <a href="/">Invester Relation</a>
              </li>
              <li className="footer-list-items">
                <a href="/">Report Fraud</a>
              </li>
              <li className="footer-list-items">
                <a href="/">Press Kit</a>
              </li>
              <li className="footer-list-items">
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-link-section">
            <ul className="footer-sublinks">
              <h3>Zomavere</h3>
              <li className="footer-list-items">
                <a href="/">Zomato</a>
              </li>
              <li className="footer-list-items">
                <a href="/">Blinkit</a>
              </li>
              <li className="footer-list-items">
                <a href="/">Feeding Inida</a>
              </li>
              <li className="footer-list-items">
                <a href="/">Hyperpure</a>
              </li>
              <li className="footer-list-items">
                <a href="/">Zomaland</a>
              </li>
            </ul>
          </div>

          <div className="footer-link-section">
            <ul className="footer-sublinks">
              <h3>Zomavere</h3>
              <li className="footer-list-items">
                <a href="/">Partner With US</a>
              </li>
              <li className="footer-list-items">
                <a href="/">Apps For You</a>
              </li>
              
              <h3>For Enterprises</h3>
              <li className="footer-list-items">
                <a href="/">Zomato for Enterprise</a>
              </li>
            </ul>
          </div>

          <div className="footer-link-section">
            <ul className="footer-sublinks">
              <h3>Learn More</h3>
              <li className="footer-list-items">
                <a href="/">Privacy</a>
              </li>
              <li className="footer-list-items">
                <a href="/">Security</a>
              </li>
              <li className="footer-list-items">
                <a href="/">Terms</a>
              </li>
              <li className="footer-list-items">
                <a href="/">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="policy-section">
          <hr />
          <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
