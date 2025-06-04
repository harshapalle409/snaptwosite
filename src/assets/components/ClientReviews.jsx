import React from 'react';
import '../styles/clientreviews.css';

const ClientReviews = () => {
  const reviews = [
    {
      name: 'Dr. Neha Rao',
      company: 'Neha Dental Clinic',
      feedback:
        'snaptosite delivered an elegant, mobile-friendly website for my clinic. Patients love the booking ease!',
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
    <section className="snaptosite-reviews-section" id="reviews">
      <h2 className="snaptosite-reviews-title">What Our Clients Say</h2>
      <div className="snaptosite-reviews-grid">
        {reviews.map((review, index) => (
          <div className="snaptosite-review-card" key={index}>
            <p className="snaptosite-review-feedback">"{review.feedback}"</p>
            <h4 className="snaptosite-review-name">– {review.name}</h4>
            <p className="snaptosite-review-company">{review.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientReviews;
