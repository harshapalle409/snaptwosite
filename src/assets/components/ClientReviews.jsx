import React from 'react';
import '../styles/clientreviews.css';

const ClientReviews = () => {
  const reviews = [
    {
      name: 'Dr. Neha Rao',
      company: 'Neha Dental Clinic',
      feedback:
        'SnapTwoSite delivered an elegant, mobile-friendly website for my clinic. Patients love the booking ease!',
    },
    {
      name: 'Hari K.',
      company: 'Hari Salon Studio',
      feedback:
        'Great team, fast service. The website they built boosted my walk-in customers and online calls.',
    },
    {
      name: 'Sree Supermart',
      company: 'Grocery Store',
      feedback:
        'They showcased our weekly offers and products beautifully. Highly recommended for local businesses.',
    },
  ];

  return (
    <section className="snaptwosite-reviews-section" id="reviews">
      <h2 className="snaptwosite-reviews-title">What Our Clients Say</h2>
      <div className="snaptwosite-reviews-grid">
        {reviews.map((review, index) => (
          <div className="snaptwosite-review-card" key={index}>
            <p className="snaptwosite-review-feedback">"{review.feedback}"</p>
            <h4 className="snaptwosite-review-name">– {review.name}</h4>
            <p className="snaptwosite-review-company">{review.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientReviews;
