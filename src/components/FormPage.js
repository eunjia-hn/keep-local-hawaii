import React from 'react';
import { useState } from "react";
import { db } from '../firebase';
import { ref, push } from 'firebase/database';

export function FormPage(props) {
  console.log("FormPage component is rendering");
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    priceRange: '',
    location: '',
    description: '',
    tags: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTagsChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prev => ({
      ...prev,
      tags: selectedOptions
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await push(ref(db, 'businesses'), formData);
      alert('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        businessName: '',
        businessType: '',
        priceRange: '',
        location: '',
        description: '',
        tags: []
      });
    } catch (error) {
      alert('Error submitting form. Please try again.');
      console.error('Firebase error:', error);
    }
  };

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '800px', 
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginTop: '2rem'
    }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '2rem' }}>
        Register Your Business
      </h1>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e9ecef',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
      </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Last Name *
          </label>
        <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e9ecef',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
      </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Email Address *
          </label>
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e9ecef',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
      </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Phone Number *
          </label>
        <input
          type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e9ecef',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
            placeholder="(808) 555-0123"
          />
      </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Business Name *
          </label>
        <input
          type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e9ecef',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
      </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Business Type *
            </label>
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #e9ecef',
                borderRadius: '8px',
                fontSize: '1rem'
              }}
            >
              <option value="">Select business type</option>
          <option value="hotel">Hotel</option>
          <option value="dining">Dining</option>
          <option value="activity">Activity</option>
        </select>
      </div>

          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Price Range *
            </label>
            <select
              name="priceRange"
              value={formData.priceRange}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #e9ecef',
                borderRadius: '8px',
                fontSize: '1rem'
              }}
            >
              <option value="">Select price range</option>
              <option value="$">$ (Budget-friendly)</option>
              <option value="$$">$$ (Moderate)</option>
              <option value="$$$">$$$ (Premium)</option>
              <option value="$$$$">$$$$ (Luxury)</option>
            </select>
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Business Location *
          </label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e9ecef',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          >
            <option value="">Select island</option>
            <option value="Maui">Maui</option>
            <option value="Hawaii">Hawaii (Big Island)</option>
            <option value="Oahu">Oahu</option>
            <option value="Molokai">Molokai</option>
            <option value="Lanai">Lanai</option>
            <option value="Kauai">Kauai</option>
        </select>
      </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Amenities & Features
          </label>
          <select
            multiple
            name="tags"
            value={formData.tags}
            onChange={handleTagsChange}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e9ecef',
              borderRadius: '8px',
              fontSize: '1rem',
              minHeight: '120px'
            }}
          >
          <option value="Free Wi-Fi">Free Wi-Fi</option>
          <option value="Air conditioning">Air conditioning</option>
          <option value="Beach access">Beach access</option>
          <option value="Free parking">Free parking</option>
          <option value="Outdoor pool">Outdoor pool</option>
          <option value="Free breakfast">Free breakfast</option>
          <option value="Airport shuttle">Airport shuttle</option>
          <option value="Kid-friendly">Kid-friendly</option>
          <option value="Fitness center">Fitness center</option>
          <option value="Beach front">Beach front</option>
          <option value="Kitchen in rooms">Kitchen in rooms</option>
          <option value="Bar">Bar</option>
          <option value="Oceanfront">Oceanfront</option>
          <option value="Luau">Luau</option>
          <option value="Live Music">Live Music</option>
          <option value="Culture">Culture</option>
            <option value="Spa">Spa</option>
            <option value="Golf course">Golf course</option>
            <option value="Water sports">Water sports</option>
            <option value="Hiking trails">Hiking trails</option>
        </select>
          <div style={{ 
            fontSize: '0.875rem', 
            color: '#6c757d', 
            marginTop: '0.5rem',
            fontStyle: 'italic'
          }}>
            Hold Ctrl (or Cmd on Mac) to select multiple options
          </div>
      </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Business Description *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e9ecef',
              borderRadius: '8px',
              fontSize: '1rem',
              resize: 'vertical'
            }}
            placeholder="Tell us about your business, what makes it unique, and what visitors can expect..."
          />
      </div>

        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Business Images
        </label>
          <input
            type="file"
            accept="image/*"
            multiple
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '2px solid #e9ecef',
              borderRadius: '8px',
              fontSize: '1rem'
            }}
          />
          <div style={{ 
            fontSize: '0.875rem', 
            color: '#6c757d', 
            marginTop: '0.5rem',
            fontStyle: 'italic'
          }}>
            Upload photos of your business (optional)
          </div>
      </div>
      
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '1rem',
            backgroundColor: '#ABC9FF',
            color: '#2c3e50',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#8BB8FF'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#ABC9FF'}
        >
          Submit Registration
      </button>
      </form>
    </div>
  );
}