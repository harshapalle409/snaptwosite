import React from 'react';
import '../styles/trustedclients.css';

const TrustedClients = () => {
  const clients = ['Neha Dental Clinic', 'Hari Salon Studio', 'Sree Supermart', 'Green Paint Hub'];

  return (
    <section className="snaptwosite-clients-section">
      <h2 className="snaptwosite-clients-title">Trusted By</h2>
      <div className="snaptwosite-clients-logos">
        {clients.map((client, index) => (
          <div className="snaptwosite-client-logo" key={index}>
            {client}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedClients;
