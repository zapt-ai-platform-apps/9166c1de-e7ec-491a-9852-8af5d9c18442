import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaMoneyBillWave, FaChartLine, FaBook, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', icon: <FaHome size={20} />, label: 'Dashboard' },
    { path: '/earning-methods', icon: <FaMoneyBillWave size={20} />, label: 'Earning Methods' },
    { path: '/tracker', icon: <FaChartLine size={20} />, label: 'Tracker' },
    { path: '/resources', icon: <FaBook size={20} />, label: 'Resources' },
    { path: '/settings', icon: <FaCog size={20} />, label: 'Settings' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center p-3 text-base font-normal rounded-lg ${
                  isActive(item.path)
                    ? 'bg-primary text-white'
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="flex-shrink-0 w-6">{item.icon}</span>
                <span className="ml-3">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;