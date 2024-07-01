// components/Rating.js
import React from 'react';

const Rating = ({ rating, onRate }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div style={{ textAlign: 'center' }}>
      {stars.map((star) => (
        <span
          key={star}
          style={{
            cursor: 'pointer',
            fontSize: '24px', // Increase size of stars
            color: star <= rating ? 'gold' : 'gray',
            display: 'inline-block', // Ensure stars are inline
            margin: '0 5px', // Add margin between stars for spacing
          }}
          onClick={() => onRate(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
