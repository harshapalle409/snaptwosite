import React from 'react';
import '../styles/home.css';
import Services from '../components/Services';
import About from '../components/About';
import WorkSamples from '../components/WorkSamples';
import TrustedClients from '../components/TrustedClients';
import Contact from '../components/Contact';
import ClientReviews from '../components/ClientReviews';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">From Local to Digital – We Build Your Online Face.</h1>
        <p className="hero-subtitle">
          SnapToSite empowers small businesses with affordable, modern websites to build trust and attract more customers.
        </p>
      </section>

      <Services />
      <About />
      <WorkSamples />
      <ClientReviews />
      <TrustedClients />
      <Contact />
    </div>
  );
};

export default Home;
