import React from 'react';

const DataSettings = () => {
  const handleExportData = () => {
    alert('Your data has been exported!');
  };

  const handleImportData = () => {
    alert('Please select a file to import.');
  };

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all your data? This action cannot be undone.')) {
      alert('All data has been cleared.');
    }
  };

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-4">Data Management</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-base font-medium text-gray-900 mb-2">Export Your Data</h3>
          <p className="text-sm text-gray-500 mb-3">
            Download a copy of your earnings data and settings
          </p>
          <button 
            type="button" 
            className="btn-primary cursor-pointer"
            onClick={handleExportData}
          >
            Export Data
          </button>
        </div>
        
        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-base font-medium text-gray-900 mb-2">Import Data</h3>
          <p className="text-sm text-gray-500 mb-3">
            Import your earnings data from a file
          </p>
          <button 
            type="button" 
            className="btn-outline cursor-pointer"
            onClick={handleImportData}
          >
            Import Data
          </button>
        </div>
        
        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-base font-medium text-gray-900 mb-2">Clear All Data</h3>
          <p className="text-sm text-gray-500 mb-3">
            Remove all your earnings data and reset your settings. This action cannot be undone.
          </p>
          <button 
            type="button" 
            className="bg-danger text-white font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-danger/90 transition-colors cursor-pointer"
            onClick={handleClearData}
          >
            Clear All Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataSettings;