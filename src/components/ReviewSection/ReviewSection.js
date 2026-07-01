import React from 'react';
import './ReviewSection.css';

const StarIcon = ({ filled }) => (
  <svg viewBox="0 0 20 20" fill={filled ? 'var(--orange)' : 'none'} stroke={filled ? 'var(--orange)' : '#CCCCCC'} strokeWidth="1.5">
    <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.26 5.06 16.7l.94-5.49-4-3.9 5.53-.8L10 1.5z" />
  </svg>
);

const breakdownData = [
  { stars: 5, count: 156 },
  { stars: 4, count: 52 },
  { stars: 3, count: 24 },
  { stars: 2, count: 8 },
  { stars: 1, count: 5 },
];

const totalReviews = breakdownData.reduce((sum, r) => sum + r.count, 0);
const averageRating = (
  breakdownData.reduce((sum, r) => sum + r.stars * r.count, 0) / totalReviews
).toFixed(1);

const dummyReviews = [
  {
    id: 1,
    name: 'Rahul M.',
    date: 'June 15, 2026',
    rating: 5,
    text: 'Absolutely love these shoes! The cushioning is incredible and they look even better in person. Great for long runs and daily wear. Highly recommend to anyone looking for comfort and style.',
  },
  {
    id: 2,
    name: 'Priya S.',
    date: 'June 10, 2026',
    rating: 4,
    text: 'Great shoes for the price. Very comfortable to walk in and the design is modern. Only reason for 4 stars is the color was slightly different from the pictures. Otherwise, fantastic purchase!',
  },
  {
    id: 3,
    name: 'Amit K.',
    date: 'May 28, 2026',
    rating: 5,
    text: 'Best running shoes I have owned. The fit is perfect, breathable material, and the sole provides excellent support. I\'ve worn these on multiple 10k runs with zero complaints.',
  },
  {
    id: 4,
    name: 'Sneha R.',
    date: 'May 20, 2026',
    rating: 4,
    text: 'Very comfortable and stylish. I wear them to the gym and for casual outings. They match well with almost any outfit. Delivery was fast too!',
  },
];

const ReviewSection = () => {
  return (
    <section className="review-section section-padding">
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: 24 }}>CUSTOMER REVIEWS</h2>

        <div className="review-section__grid">
          {/* Rating Summary */}
          <div className="review-section__summary">
            <span className="review-section__big-rating">{averageRating}</span>
            <div>
              <div className="review-section__summary-stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} filled={i <= Math.round(parseFloat(averageRating))} />
                ))}
              </div>
              <span className="review-section__summary-text">
                Based on {totalReviews} Reviews
              </span>
            </div>
          </div>

          {/* Breakdown */}
          <div className="review-section__breakdown">
            {breakdownData.map((row) => (
              <div key={row.stars} className="review-section__breakdown-row">
                <span className="review-section__breakdown-label">{row.stars}★</span>
                <div className="review-section__breakdown-bar">
                  <div
                    className="review-section__breakdown-fill"
                    style={{ width: `${(row.count / totalReviews) * 100}%` }}
                  />
                </div>
                <span className="review-section__breakdown-count">{row.count}</span>
              </div>
            ))}
          </div>

          {/* Reviews List */}
          <div className="review-section__list">
            {dummyReviews.map((review) => (
              <div key={review.id} className="review-section__card">
                <div className="review-section__card-header">
                  <span className="review-section__card-name">{review.name}</span>
                  <span className="review-section__card-date">{review.date}</span>
                </div>
                <div className="review-section__card-stars">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} filled={i <= review.rating} />
                  ))}
                </div>
                <p className="review-section__card-text">{review.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="review-section__write-btn">
          <button className="btn-orange">Write a Review</button>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
