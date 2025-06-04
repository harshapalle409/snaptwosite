import React from 'react';
import '../styles/trustedclients.css';

const TrustedClients = () => {
  const clients = ['Neha Dental Clinic', 'Hari Salon Studio', 'Sree Supermart', 'Green Paint Hub'];

  return (
    <section className="snaptosite-clients-section">
      <h2 className="snaptosite-clients-title">Trusted By</h2>
      <div className="snaptosite-clients-logos">
        {clients.map((client, index) => (
          <div className="snaptosite-client-logo" key={index}>
            {client}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedClients;
