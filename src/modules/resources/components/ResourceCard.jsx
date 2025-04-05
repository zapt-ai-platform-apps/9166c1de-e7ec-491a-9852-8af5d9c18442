import React from 'react';
import { FaExternalLinkAlt, FaBookOpen, FaVideo, FaTools, FaPodcast } from 'react-icons/fa';

const ResourceCard = ({ resource }) => {
  const getIcon = () => {
    switch (resource.type) {
      case 'article':
        return <FaBookOpen className="text-primary" size={20} />;
      case 'video':
        return <FaVideo className="text-danger" size={20} />;
      case 'tool':
        return <FaTools className="text-success" size={20} />;
      case 'podcast':
        return <FaPodcast className="text-secondary" size={20} />;
      default:
        return <FaBookOpen className="text-primary" size={20} />;
    }
  };

  const getTypeLabel = () => {
    switch (resource.type) {
      case 'article':
        return <span className="badge bg-blue-100 text-blue-800">Article</span>;
      case 'video':
        return <span className="badge bg-red-100 text-red-800">Video</span>;
      case 'tool':
        return <span className="badge bg-green-100 text-green-800">Tool</span>;
      case 'podcast':
        return <span className="badge bg-purple-100 text-purple-800">Podcast</span>;
      default:
        return <span className="badge bg-gray-100 text-gray-800">Resource</span>;
    }
  };

  return (
    <div className="card hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-gray-50">
          {getIcon()}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
          <div className="mt-1">{getTypeLabel()}</div>
        </div>
      </div>

      <p className="text-gray-600 mt-4 flex-grow">{resource.description}</p>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-primary font-medium hover:underline transition-colors cursor-pointer"
        >
          <span className="mr-1">Visit Resource</span>
          <FaExternalLinkAlt size={14} />
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;