import React, { useState } from 'react';
import EarningMethodCard from './components/EarningMethodCard';
import FilterBar from './components/FilterBar';
import { earningMethodsData } from './data/earningMethodsData';

const EarningMethods = () => {
  const [filters, setFilters] = useState({
    difficultyLevel: 'all',
    earningPotential: 'all',
    searchQuery: '',
  });

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  const filteredMethods = earningMethodsData.filter((method) => {
    // Filter by difficulty level
    if (filters.difficultyLevel !== 'all' && method.difficultyLevel !== filters.difficultyLevel) {
      return false;
    }
    
    // Filter by earning potential
    if (filters.earningPotential !== 'all') {
      const potentialValue = parseInt(method.earningPotential.replace('$', '').split('-')[1]);
      const filterValue = parseInt(filters.earningPotential);
      
      if (filterValue === 1000 && potentialValue >= 1000) {
        return true;
      } else if (filterValue === 500 && potentialValue < 1000 && potentialValue >= 500) {
        return true;
      } else if (filterValue === 100 && potentialValue < 500) {
        return true;
      } else if (filterValue !== 100 && filterValue !== 500 && filterValue !== 1000) {
        return true;
      } else {
        return false;
      }
    }
    
    // Filter by search query
    if (filters.searchQuery && !method.name.toLowerCase().includes(filters.searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="space-y-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Earning Methods</h1>
        <p className="text-gray-600 mt-1">
          Explore different ways to earn money online
        </p>
      </header>

      <FilterBar filters={filters} onFilterChange={handleFilterChange} />

      {filteredMethods.length === 0 ? (
        <div className="card p-8 text-center">
          <h3 className="text-lg font-medium text-gray-900">No methods found</h3>
          <p className="text-gray-600 mt-2">Try adjusting your filters to see more results</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMethods.map((method) => (
            <EarningMethodCard key={method.id} method={method} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EarningMethods;