import React from 'react';
import { Link } from 'react-router-dom';

const StatCard = ({ title, value, description, icon, change, linkTo }) => {
  const getChangeClass = () => {
    switch (change.type) {
      case 'positive':
        return 'text-success';
      case 'negative':
        return 'text-danger';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <div className="p-2 rounded-lg bg-gray-50">{icon}</div>
      </div>
      <div className="mt-4">
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <Link to={linkTo} className={`text-sm ${getChangeClass()} flex items-center mt-1`}>
          {change.value}
        </Link>
      </div>
    </div>
  );
};

export default StatCard;