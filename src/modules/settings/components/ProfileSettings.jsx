import React, { useState } from 'react';

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    currency: 'USD',
    timezone: 'UTC',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save profile settings
    alert('Profile settings saved!');
  };

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">Profile Settings</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="input"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="input"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
          />
        </div>
        
        <div>
          <label htmlFor="currency" className="label">Currency</label>
          <select
            id="currency"
            name="currency"
            className="input"
            value={formData.currency}
            onChange={handleChange}
          >
            <option value="USD">US Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">British Pound (GBP)</option>
            <option value="CAD">Canadian Dollar (CAD)</option>
            <option value="AUD">Australian Dollar (AUD)</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="timezone" className="label">Timezone</label>
          <select
            id="timezone"
            name="timezone"
            className="input"
            value={formData.timezone}
            onChange={handleChange}
          >
            <option value="UTC">UTC (Coordinated Universal Time)</option>
            <option value="EST">EST (Eastern Standard Time)</option>
            <option value="CST">CST (Central Standard Time)</option>
            <option value="MST">MST (Mountain Standard Time)</option>
            <option value="PST">PST (Pacific Standard Time)</option>
          </select>
        </div>
        
        <div className="pt-4">
          <button type="submit" className="btn-primary cursor-pointer">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;