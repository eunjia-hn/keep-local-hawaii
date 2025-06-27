import React, { useState } from 'react';

export function ModernHotelCard({ hotel }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const { title, rating, description, cardImg, tags, island, price } = hotel;

  const handleSave = (e) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  const handleShare = (e) => {
    e.stopPropagation();
    // Share functionality would go here
    console.log('Sharing hotel:', title);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="stars">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="star filled">★</span>
        ))}
        {hasHalfStar && <span className="star half">★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i + fullStars + (hasHalfStar ? 1 : 0)} className="star empty">☆</span>
        ))}
      </div>
    );
  };

  const renderPrice = (price) => {
    const priceMap = {
      '$': 'Budget',
      '$$': 'Moderate', 
      '$$$': 'Premium',
      '$$$$': 'Luxury'
    };
    return (
      <div className="price-badge">
        <span className="price-symbol">{price}</span>
        <span className="price-label">{priceMap[price]}</span>
      </div>
    );
  };

  return (
    <div 
      className={`modern-hotel-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-image">
        <img src={cardImg} alt={title} />
        <div className="card-overlay">
          <div className="overlay-top">
            {renderPrice(price)}
            <button 
              className={`save-btn ${isSaved ? 'saved' : ''}`}
              onClick={handleSave}
              title={isSaved ? 'Remove from saved' : 'Save hotel'}
            >
              {isSaved ? '❤️' : '🤍'}
            </button>
          </div>
          <div className="overlay-bottom">
            <div className="rating-badge">
              {renderStars(rating)}
              <span className="rating-number">{rating}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          <div className="card-location">
            <span className="location-icon">📍</span>
            <span>{island}</span>
          </div>
        </div>

        <p className="card-description">{description}</p>

        <div className="card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        <div className="card-actions">
          <button className="btn-primary">View Details</button>
          <button className="btn-outline" onClick={handleShare}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
} 