import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <section className="snaptosite-about-section" id="about">
      <div className="snaptosite-about-container">
        <h2 className="snaptosite-about-title">About SnapToSite</h2>
        <p className="snaptosite-about-description">
          SnapToSite is on a mission to help small and mid-sized businesses build a powerful online presence. Whether
          you're a salon, clinic, supermarket, or hardware shop, we create beautiful, fast, and mobile-friendly websites
          that showcase your services, products, and team to the world.
        </p>
        <p className="snaptosite-about-description">
          We believe that every local business deserves a digital identity that builds trust, boosts credibility, and
          helps attract more customers — without the high cost and complexity of traditional development.
        </p>
      </div>
    </section>
  );
};

export default About;
