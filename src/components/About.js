import React from 'react';

export function About(props) {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-background">
          <img src="img/hawaii-coast.png" alt="Hawaiian islands landscape" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Supporting Local Hawaiian Businesses</h1>
          <p>Connecting visitors with authentic island experiences while preserving Hawaiian culture and supporting local communities</p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p className="mission-text">
              We're dedicated to bridging the gap between visitors and authentic Hawaiian experiences. 
              Our platform connects travelers with locally-owned businesses, ensuring that tourism dollars 
              directly benefit Native Hawaiian communities while preserving the rich cultural heritage of the islands.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Story</h2>
            <p>Why we created this platform</p>
          </div>
          <div className="story-content">
            <div className="story-text">
              <p>
                The tourism industry fuels the Hawaiian economy, however, with millions of tourists entering the state each
                year it is critical for the native population and environment that tourists spend their money at local,
                Hawaiian owned businesses. Rather than supporting foreign tourism companies that do not help support the
                local population and disregard the urbanizing effects of their efforts, visitors should be well educated on
                the sustainable, locally-run businesses that are accessible to them on the islands.
              </p>
              <p>
                Unfortunately, this information is not readily available as large corporations have taken over the tourism industry. 
                Current efforts, such as Shop Small Hawaii, provide resources for visitors to find local businesses on the islands.
                However, sites like this one are typically not interactive, and do not include enough information to be able to
                successfully plan an entire trip around. Our group's goal is to create a one-stop site that provides all
                of the necessary resources and tools to plan an entirely sustainable trip that supports the Native Hawaiian
                population.
              </p>
            </div>
            <div className="story-visual">
              <div className="impact-card">
                <div className="impact-icon">🌺</div>
                <h3>Cultural Preservation</h3>
                <p>Supporting authentic Hawaiian experiences that honor traditional values and practices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="impact-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Local Matters</h2>
            <p>The impact of supporting Hawaiian-owned businesses</p>
          </div>
          <div className="impact-grid">
            <div className="impact-item">
              <div className="impact-icon">💰</div>
              <h3>Economic Impact</h3>
              <p>Tourism dollars stay in local communities, supporting families and small businesses across the islands.</p>
            </div>
            <div className="impact-item">
              <div className="impact-icon">🏺</div>
              <h3>Cultural Authenticity</h3>
              <p>Experience the real Hawaii through genuine cultural practices, traditional cuisine, and local hospitality.</p>
            </div>
            <div className="impact-item">
              <div className="impact-icon">🌿</div>
              <h3>Environmental Stewardship</h3>
              <p>Local businesses often practice sustainable tourism that respects and protects Hawaii's natural resources.</p>
            </div>
            <div className="impact-item">
              <div className="impact-icon">🤝</div>
              <h3>Community Support</h3>
              <p>Help bridge the inequality gap for Native Hawaiians who disproportionately bear tourism's negative effects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose & Impact */}
      <section className="purpose-section">
        <div className="container">
          <div className="purpose-content">
            <h2>Purpose & Impact</h2>
            <p>
              This app will help shorten the inequality gap for Native Hawaiians who unproportionally bear the negative
              effects of tourism in their homeland but only receive a tiny fraction of the tourism income. Although Hawaii
              is well known for its beauty that attracted millions of tourists each year, most tourist weren't aware of
              their impact on Native Hawaiians, who are struggling to keep up with the cost of living. We want to bring
              awareness of the importance of supporting local because it actually help people living in the community.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="offerings-section">
        <div className="container">
          <div className="section-header">
            <h2>What We Offer</h2>
            <p>Comprehensive resources for authentic Hawaiian experiences</p>
          </div>
          <div className="offerings-grid">
            <div className="offering-card">
              <div className="offering-icon">🏨</div>
              <h3>Local Accommodations</h3>
              <p>Discover authentic Hawaiian-owned hotels, inns, and vacation rentals that offer genuine island hospitality.</p>
            </div>
            <div className="offering-card">
              <div className="offering-icon">🍽️</div>
              <h3>Authentic Dining</h3>
              <p>Experience traditional Hawaiian cuisine and local flavors at family-owned restaurants across the islands.</p>
            </div>
            <div className="offering-card">
              <div className="offering-icon">🏄‍♂️</div>
              <h3>Cultural Activities</h3>
              <p>Participate in authentic luaus, guided tours, and cultural experiences led by local Hawaiian guides.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
