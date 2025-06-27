import React, { useState, useEffect } from 'react';
import { ModernDiningCard } from './ModernDiningCard';
import { DiningFilterBar } from './DiningFilterBar';

export function DiningPage(props) {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    island: 'all',
    cuisine: 'all',
    price: 'all',
    amenities: []
  });

  // Filter restaurants data
  useEffect(() => {
    let restaurants = props.cardData.filter((cardObj) => cardObj.category === "dining");
    
    // Apply search filter
    if (filters.search) {
      restaurants = restaurants.filter(restaurant => 
        restaurant.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        restaurant.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        restaurant.island.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    // Apply island filter
    if (filters.island !== 'all') {
      restaurants = restaurants.filter(restaurant => restaurant.island === filters.island);
    }
    
    // Apply cuisine filter
    if (filters.cuisine !== 'all') {
      restaurants = restaurants.filter(restaurant => 
        restaurant.tags.includes(filters.cuisine)
      );
    }
    
    // Apply price filter
    if (filters.price !== 'all') {
      restaurants = restaurants.filter(restaurant => restaurant.price === filters.price);
    }
    
    // Apply amenities filter
    if (filters.amenities.length > 0) {
      restaurants = restaurants.filter(restaurant => 
        filters.amenities.some(amenity => restaurant.tags.includes(amenity))
      );
    }
    
    setFilteredRestaurants(restaurants);
  }, [props.cardData, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const availableIslands = [...new Set(props.cardData
    .filter(card => card.category === "dining")
    .map(restaurant => restaurant.island))];

  const availableCuisines = [...new Set(props.cardData
    .filter(card => card.category === "dining")
    .flatMap(restaurant => restaurant.tags)
    .filter(tag => ['Hawaiian', 'Asian', 'American', 'Italian', 'Mexican', 'Japanese', 'Thai', 'Chinese', 'Korean', 'Vietnamese', 'Mediterranean', 'French', 'Indian'].includes(tag)))];

  const availableAmenities = [...new Set(props.cardData
    .filter(card => card.category === "dining")
    .flatMap(restaurant => restaurant.tags)
    .filter(tag => !['Hawaiian', 'Seafood', 'Asian', 'American', 'Italian', 'Mexican', 'Japanese', 'Thai', 'Chinese', 'Korean', 'Vietnamese', 'Mediterranean', 'French', 'Indian'].includes(tag)))];

  return (
    <div className="dining-page">
      {/* Simple Top Banner */}
      <div className="dining-banner">
        <div className="banner-content">
          <h1>🍽️ Hawaiian Dining</h1>
          <p>Experience authentic local flavors and island cuisine</p>
        </div>
      </div>

      {/* Filter Bar */}
      <DiningFilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        islands={availableIslands}
        cuisines={availableCuisines}
        amenities={availableAmenities}
      />

      {/* Restaurants Grid */}
      <section className="dining-grid-section">
        <div className="container">
          {filteredRestaurants.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">🍽️</div>
              <h3>No restaurants found</h3>
              <p>Try adjusting your filters to see more options</p>
              <button 
                className="btn btn-primary"
                onClick={() => setFilters({
                  search: '',
                  island: 'all',
                  cuisine: 'all',
                  price: 'all',
                  amenities: []
                })}
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              <div className="results-header">
                <h2>Available Restaurants</h2>
                <p>{filteredRestaurants.length} restaurants found</p>
              </div>
              <div className="dining-grid">
                {filteredRestaurants.map((restaurant) => (
                  <ModernDiningCard 
                    key={restaurant.cardId} 
                    restaurant={restaurant} 
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}