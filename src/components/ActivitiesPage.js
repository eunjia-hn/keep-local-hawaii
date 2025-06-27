import React, { useState, useEffect } from 'react';
import { ModernActivityCard } from './ModernActivityCard';
import { ActivityFilterBar } from './ActivityFilterBar';

export function ActivitiesPage(props) {
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    island: 'all',
    activityType: 'all',
    price: 'all',
    amenities: []
  });

  // Filter activities data
  useEffect(() => {
    let activities = props.cardData.filter((cardObj) => cardObj.category === "activity");
    
    // Apply search filter
    if (filters.search) {
      activities = activities.filter(activity => 
        activity.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        activity.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        activity.island.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    // Apply island filter
    if (filters.island !== 'all') {
      activities = activities.filter(activity => activity.island === filters.island);
    }
    
    // Apply activity type filter
    if (filters.activityType !== 'all') {
      activities = activities.filter(activity => 
        activity.tags.includes(filters.activityType)
      );
    }
    
    // Apply price filter
    if (filters.price !== 'all') {
      activities = activities.filter(activity => activity.price === filters.price);
    }
    
    // Apply amenities filter
    if (filters.amenities.length > 0) {
      activities = activities.filter(activity => 
        filters.amenities.some(amenity => activity.tags.includes(amenity))
      );
    }
    
    setFilteredActivities(activities);
  }, [props.cardData, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const availableIslands = [...new Set(props.cardData
    .filter(card => card.category === "activity")
    .map(activity => activity.island))];

  const availableActivityTypes = [...new Set(props.cardData
    .filter(card => card.category === "activity")
    .flatMap(activity => activity.tags)
    .filter(tag => ['Luau', 'Tour', 'Nature', 'Culture', 'Adventure', 'Water Sports', 'Hiking', 'Snorkeling', 'Diving', 'Fishing', 'Sailing', 'Surfing'].includes(tag)))];

  const availableAmenities = [...new Set(props.cardData
    .filter(card => card.category === "activity")
    .flatMap(activity => activity.tags)
    .filter(tag => !['Luau', 'Tour', 'Nature', 'Culture', 'Adventure', 'Water Sports', 'Hiking', 'Snorkeling', 'Diving', 'Fishing', 'Sailing', 'Surfing'].includes(tag)))];

  return (
    <div className="activities-page">
      {/* Simple Top Banner */}
      <div className="activities-banner">
        <div className="banner-content">
          <h1>🏄‍♂️ Hawaiian Activities</h1>
          <p>Discover exciting adventures and cultural experiences across the islands</p>
        </div>
      </div>

      {/* Filter Bar */}
      <ActivityFilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        islands={availableIslands}
        activityTypes={availableActivityTypes}
        amenities={availableAmenities}
      />

      {/* Activities Grid */}
      <section className="activities-grid-section">
        <div className="container">
          {filteredActivities.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">🏄‍♂️</div>
              <h3>No activities found</h3>
              <p>Try adjusting your filters to see more options</p>
              <button 
                className="btn btn-primary"
                onClick={() => setFilters({
                  search: '',
                  island: 'all',
                  activityType: 'all',
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
                <h2>Available Activities</h2>
                <p>{filteredActivities.length} activities found</p>
              </div>
              <div className="activities-grid">
                {filteredActivities.map((activity) => (
                  <ModernActivityCard 
                    key={activity.cardId} 
                    activity={activity} 
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