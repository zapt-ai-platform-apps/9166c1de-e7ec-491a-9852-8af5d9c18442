import React from 'react';
import ResourceCard from './components/ResourceCard';
import { resourcesData } from './data/resourcesData';

const Resources = () => {
  // Group resources by category
  const groupedResources = resourcesData.reduce((acc, resource) => {
    if (!acc[resource.category]) {
      acc[resource.category] = [];
    }
    acc[resource.category].push(resource);
    return acc;
  }, {});

  // Get all categories
  const categories = Object.keys(groupedResources);

  return (
    <div className="space-y-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Resources</h1>
        <p className="text-gray-600 mt-1">
          Learn and improve your online earning skills
        </p>
      </header>

      {categories.map((category) => (
        <section key={category} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupedResources[category].map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Resources;