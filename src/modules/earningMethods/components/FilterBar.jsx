import React from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';

const FilterBar = ({ filters, onFilterChange }) => {
  const handleSearchChange = (e) => {
    onFilterChange({ searchQuery: e.target.value });
  };

  const handleDifficultyChange = (e) => {
    onFilterChange({ difficultyLevel: e.target.value });
  };

  const handleEarningPotentialChange = (e) => {
    onFilterChange({ earningPotential: e.target.value });
  };

  return (
    <div className="card p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            className="input pl-10"
            placeholder="Search earning methods..."
            value={filters.searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center">
            <div className="mr-2 text-gray-500">
              <FaFilter />
            </div>
            <select
              className="input"
              value={filters.difficultyLevel}
              onChange={handleDifficultyChange}
            >
              <option value="all">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div>
            <select
              className="input"
              value={filters.earningPotential}
              onChange={handleEarningPotentialChange}
            >
              <option value="all">All Potential</option>
              <option value="100">Under $500</option>
              <option value="500">$500 - $1000</option>
              <option value="1000">$1000+</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;