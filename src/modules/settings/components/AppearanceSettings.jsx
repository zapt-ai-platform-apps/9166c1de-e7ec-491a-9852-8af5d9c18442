import React, { useState } from 'react';

const AppearanceSettings = () => {
  const [appearance, setAppearance] = useState({
    theme: 'light',
    fontSize: 'medium',
    compactMode: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppearance({
      ...appearance,
      [name]: value,
    });
  };

  const handleToggle = () => {
    setAppearance({
      ...appearance,
      compactMode: !appearance.compactMode,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save appearance settings
    alert('Appearance settings saved!');
  };

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">Appearance Settings</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="theme" className="label">Theme</label>
          <select
            id="theme"
            name="theme"
            className="input"
            value={appearance.theme}
            onChange={handleChange}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System Default</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="fontSize" className="label">Font Size</label>
          <select
            id="fontSize"
            name="fontSize"
            className="input"
            value={appearance.fontSize}
            onChange={handleChange}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        
        <div className="pt-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium text-gray-900">Compact Mode</h3>
              <p className="text-sm text-gray-500">Use a more compact layout to fit more on screen</p>
            </div>
            <button
              type="button"
              className={`${
                appearance.compactMode ? 'bg-primary' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer`}
              onClick={handleToggle}
            >
              <span
                className={`${
                  appearance.compactMode ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 rounded-full bg-white transition`}
              />
            </button>
          </div>
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

export default AppearanceSettings;