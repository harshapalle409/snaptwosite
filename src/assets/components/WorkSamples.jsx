import React from 'react';
import '../styles/worksamples.css';

const WorkSamples = () => {
  const samples = [
    {
      title: 'Clinic Website',
      image: 'https://via.placeholder.com/300x180?text=Clinic+Site',
      link: 'https://example.com/clinic',
    },
    {
      title: 'Salon Website',
      image: 'https://via.placeholder.com/300x180?text=Salon+Site',
      link: 'https://example.com/salon',
    },
    {
      title: 'Supermarket Website',
      image: 'https://via.placeholder.com/300x180?text=Supermarket+Site',
      link: 'https://example.com/supermarket',
    },
    {
      title: 'Hardware Shop Website',
      image: 'https://via.placeholder.com/300x180?text=Hardware+Site',
      link: 'https://example.com/hardware',
    },
  ];

  return (
    <section className="snaptwosite-worksamples-section" id="worksamples">
      <h2 className="snaptwosite-worksamples-title">Our Work Samples</h2>
      <div className="snaptwosite-worksamples-grid">
        {samples.map((sample, index) => (
          <a
            href={sample.link}
            target="_blank"
            rel="noopener noreferrer"
            className="snaptwosite-sample-card"
            key={index}
          >
            <img
              src={sample.image}
              alt={sample.title}
              className="snaptwosite-sample-image"
            />
            <h3 className="snaptwosite-sample-title">{sample.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default WorkSamples;
