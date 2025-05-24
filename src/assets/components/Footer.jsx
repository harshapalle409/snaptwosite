import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="snaptwosite-footer">
      <div className="snaptwosite-footer-content">
        <h3 className="snaptwosite-footer-logo">SnapTwoSite</h3>
        <p className="snaptwosite-footer-tagline">
          Business Showcasing Made Simple.
        </p>
        <p className="snaptwosite-footer-contact">
          📞 +91-91216-47398 | ✉️ palleharsha455@gmail.com
        </p>
        <div className="snaptwosite-footer-socials">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
        </div>
        <p className="snaptwosite-footer-copy">
          © {new Date().getFullYear()} SnapTwoSite. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
