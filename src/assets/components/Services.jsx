import React from 'react';
import '../styles/services.css';

const Services = () => {
  const services = [
    {
      title: 'Custom Website Design',
      description: 'We create modern, responsive websites tailored to your business goals.',
    },
    {
      title: 'Business Portfolio Sites',
      description: 'Perfect for salons, clinics, and shops to showcase services and contact info.',
    },
    {
      title: 'Mobile Optimization',
      description: 'Your site will look great and work fast on all devices.',
    },
    {
      title: 'SEO & Google Presence',
      description: 'Basic SEO setup to help you rank and appear on Google Search.',
    },
    {
      title: 'Contact & Location Setup',
      description: 'Clickable phone, WhatsApp, and Google Maps integration for easy reach.',
    },
    {
      title: 'Ongoing Maintenance',
      description: 'We offer affordable post-launch updates and maintenance support.',
    },
  ];

  return (
    <section className="snaptwosite-services-section" id="services">
      <h2 className="snaptwosite-services-title">Our Services</h2>
      <div className="snaptwosite-services-grid">
        {services.map((service, index) => (
          <div className="snaptwosite-service-card" key={index}>
            <h3 className="snaptwosite-service-name">{service.title}</h3>
            <p className="snaptwosite-service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
