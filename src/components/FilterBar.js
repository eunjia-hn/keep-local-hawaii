import React, { useState } from 'react';

export function FilterBar({ filters, onFilterChange, islands, amenities }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearchChange = (e) => {
    onFilterChange({ search: e.target.value });
  };

  const handleIslandChange = (island) => {
    onFilterChange({ island: island === filters.island ? 'all' : island });
  };

  const handlePriceChange = (price) => {
    onFilterChange({ price: price === filters.price ? 'all' : price });
  };

  const handleAmenityToggle = (amenity) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter(a => a !== amenity)
      : [...filters.amenities, amenity];
    onFilterChange({ amenities: newAmenities });
  };

  const clearAllFilters = () => {
    onFilterChange({
      search: '',
      island: 'all',
      price: 'all',
      amenities: []
    });
  };

  const activeFiltersCount = [
    filters.search ? 1 : 0,
    filters.island !== 'all' ? 1 : 0,
    filters.price !== 'all' ? 1 : 0,
    filters.amenities.length
  ].reduce((sum, count) => sum + count, 0);

  return (
    <div className="filter-bar">
      <div className="container">
        {/* Search Bar */}
        <div className="search-section">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search hotels by name, location, or features..."
              value={filters.search}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
          
          <div className="filter-toggle">
            <button 
              className="btn btn-outline"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
              <span className={`toggle-icon ${isExpanded ? 'expanded' : ''}`}>▼</span>
            </button>
          </div>
        </div>

        {/* Expanded Filters */}
        {isExpanded && (
          <div className="filters-expanded">
            {/* Island Filter */}
            <div className="filter-group">
              <h4>Island</h4>
              <div className="filter-chips">
                <button
                  className={`filter-chip ${filters.island === 'all' ? 'active' : ''}`}
                  onClick={() => handleIslandChange('all')}
                >
                  All Islands
                </button>
                {islands.map(island => (
                  <button
                    key={island}
                    className={`filter-chip ${filters.island === island ? 'active' : ''}`}
                    onClick={() => handleIslandChange(island)}
                  >
                    {island}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="filter-group">
              <h4>Price Range</h4>
              <div className="price-filter">
                <button
                  className={`price-btn ${filters.price === 'all' ? 'active' : ''}`}
                  onClick={() => handlePriceChange('all')}
                >
                  All
                </button>
                <button
                  className={`price-btn ${filters.price === '$' ? 'active' : ''}`}
                  onClick={() => handlePriceChange('$')}
                >
                  $ Budget
                </button>
                <button
                  className={`price-btn ${filters.price === '$$' ? 'active' : ''}`}
                  onClick={() => handlePriceChange('$$')}
                >
                  $$ Moderate
                </button>
                <button
                  className={`price-btn ${filters.price === '$$$' ? 'active' : ''}`}
                  onClick={() => handlePriceChange('$$$')}
                >
                  $$$ Premium
                </button>
                <button
                  className={`price-btn ${filters.price === '$$$$' ? 'active' : ''}`}
                  onClick={() => handlePriceChange('$$$$')}
                >
                  $$$$ Luxury
                </button>
              </div>
            </div>

            {/* Amenities Filter */}
            <div className="filter-group">
              <h4>Amenities</h4>
              <div className="amenities-grid">
                {amenities.slice(0, 12).map(amenity => (
                  <label key={amenity} className="amenity-checkbox">
                    <input
                      type="checkbox"
                      checked={filters.amenities.includes(amenity)}
                      onChange={() => handleAmenityToggle(amenity)}
                    />
                    <span className="checkmark"></span>
                    {amenity}
                  </label>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {activeFiltersCount > 0 && (
              <div className="clear-filters">
                <button className="btn btn-outline" onClick={clearAllFilters}>
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 