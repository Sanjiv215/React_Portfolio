import React from "react";
import "./Footer.css";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Sanjiv215",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prasadsanjiv/",
    icon: <FaLinkedin />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/code.sanjiv/",
    icon: <FaInstagram />,
  },
  {
    label: "Leetcode",
    href: "https://leetcode.com/u/NJNTE0egUh/",
    icon: <SiLeetcode />,
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-kicker">Sanjiv Prasad</p>
            <h2>Designing clean interfaces and building thoughtful web experiences.</h2>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#journey">Journey</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Sanjiv Prasad. Built with React and a lot of curiosity.</p>
          <a href="#home">Back to top</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
