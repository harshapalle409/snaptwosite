import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="snaptosite-footer">
      <div className="snaptosite-footer-content">
        <h3 className="snaptosite-footer-logo">SnapToSite</h3>
        <p className="snaptosite-footer-tagline">
          Business Showcasing Made Simple.
        </p>
        <p className="snaptosite-footer-contact">
          📞 +91-91216-47398 | ✉️ palleharsha455@gmail.com
        </p>
        <div className="snaptosite-footer-socials">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
        </div>
        <p className="snaptosite-footer-copy">
          © {new Date().getFullYear()} SnapToSite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
