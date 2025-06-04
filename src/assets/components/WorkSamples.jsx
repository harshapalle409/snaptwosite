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
    <section className="snaptosite-worksamples-section" id="worksamples">
      <h2 className="snaptosite-worksamples-title">Our Work Samples</h2>
      <div className="snaptosite-worksamples-grid">
        {samples.map((sample, index) => (
          <a
            href={sample.link}
            target="_blank"
            rel="noopener noreferrer"
            className="snaptosite-sample-card"
            key={index}
          >
            <img
              src={sample.image}
              alt={sample.title}
              className="snaptosite-sample-image"
            />
            <h3 className="snaptosite-sample-title">{sample.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default WorkSamples;
