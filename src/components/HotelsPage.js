import React, { useState, useEffect } from 'react';
import { ModernHotelCard } from './ModernHotelCard';
import { FilterBar } from './FilterBar';

export function HotelsPage(props) {
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    island: 'all',
    price: 'all',
    amenities: []
  });

  // Filter hotels data
  useEffect(() => {
    let hotels = props.cardData.filter((cardObj) => cardObj.category === "hotel");
    
    // Apply search filter
    if (filters.search) {
      hotels = hotels.filter(hotel => 
        hotel.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        hotel.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        hotel.island.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    // Apply island filter
    if (filters.island !== 'all') {
      hotels = hotels.filter(hotel => hotel.island === filters.island);
    }
    
    // Apply price filter
    if (filters.price !== 'all') {
      hotels = hotels.filter(hotel => hotel.price === filters.price);
    }
    
    // Apply amenities filter
    if (filters.amenities.length > 0) {
      hotels = hotels.filter(hotel => 
        filters.amenities.some(amenity => hotel.tags.includes(amenity))
      );
    }
    
    setFilteredHotels(hotels);
  }, [props.cardData, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const availableIslands = [...new Set(props.cardData
    .filter(card => card.category === "hotel")
    .map(hotel => hotel.island))];

  const availableAmenities = [...new Set(props.cardData
    .filter(card => card.category === "hotel")
    .flatMap(hotel => hotel.tags))];

  return (
    <div className="hotels-page">
      {/* Simple Top Banner */}
      <div className="hotels-banner">
        <div className="banner-content">
          <h1>🏨 Hawaiian Hotels</h1>
          <p>Discover authentic local accommodations across the islands</p>
        </div>
      </div>

      {/* Filter Bar */}
      <FilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        islands={availableIslands}
        amenities={availableAmenities}
      />

      {/* Hotels Grid */}
      <section className="hotels-grid-section">
        <div className="container">
          {filteredHotels.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">🏨</div>
              <h3>No hotels found</h3>
              <p>Try adjusting your filters to see more options</p>
              <button 
                className="btn btn-primary"
                onClick={() => setFilters({
                  search: '',
                  island: 'all',
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
                <h2>Available Hotels</h2>
                <p>{filteredHotels.length} hotels found</p>
              </div>
              <div className="hotels-grid">
                {filteredHotels.map((hotel) => (
                  <ModernHotelCard 
                    key={hotel.cardId} 
                    hotel={hotel} 
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

