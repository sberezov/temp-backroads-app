import React from "react";
import { navLinks, socialLinks } from "../data";

function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {navLinks.map((item) => {
          return (
            <li key={item}>
              <a href={`{#${item}`} className="footer-link">
                {item}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { id, icon, href } = link;
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
