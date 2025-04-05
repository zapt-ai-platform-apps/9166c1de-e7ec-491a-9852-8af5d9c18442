import React, { useState } from 'react';

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    earningReminders: true,
    weeklyReports: true,
    newMethods: true,
    tipOfTheDay: false,
  });

  const handleToggle = (setting) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save notification settings
    alert('Notification settings saved!');
  };

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">Notification Settings</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium text-gray-900">Earning Reminders</h3>
              <p className="text-sm text-gray-500">Receive reminders to update your earnings</p>
            </div>
            <button
              type="button"
              className={`${
                settings.earningReminders ? 'bg-primary' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer`}
              onClick={() => handleToggle('earningReminders')}
            >
              <span
                className={`${
                  settings.earningReminders ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 rounded-full bg-white transition`}
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium text-gray-900">Weekly Reports</h3>
              <p className="text-sm text-gray-500">Get weekly summaries of your earnings</p>
            </div>
            <button
              type="button"
              className={`${
                settings.weeklyReports ? 'bg-primary' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer`}
              onClick={() => handleToggle('weeklyReports')}
            >
              <span
                className={`${
                  settings.weeklyReports ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 rounded-full bg-white transition`}
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium text-gray-900">New Earning Methods</h3>
              <p className="text-sm text-gray-500">Notifications when new earning methods are added</p>
            </div>
            <button
              type="button"
              className={`${
                settings.newMethods ? 'bg-primary' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer`}
              onClick={() => handleToggle('newMethods')}
            >
              <span
                className={`${
                  settings.newMethods ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 rounded-full bg-white transition`}
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium text-gray-900">Tip of the Day</h3>
              <p className="text-sm text-gray-500">Daily tips on improving your earnings</p>
            </div>
            <button
              type="button"
              className={`${
                settings.tipOfTheDay ? 'bg-primary' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer`}
              onClick={() => handleToggle('tipOfTheDay')}
            >
              <span
                className={`${
                  settings.tipOfTheDay ? 'translate-x-6' : 'translate-x-1'
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

export default NotificationSettings;