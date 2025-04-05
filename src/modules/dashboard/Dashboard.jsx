import React from 'react';
import { Link } from 'react-router-dom';
import StatCard from './components/StatCard';
import EarningMethodsPreview from './components/EarningMethodsPreview';
import RecentEarnings from './components/RecentEarnings';
import { FaChartLine, FaMoneyBillWave, FaBook } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome to your online earnings guide</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Monthly Earnings"
          value="$0"
          description="Track your earnings"
          icon={<FaChartLine className="text-primary" size={24} />}
          change={{ type: 'neutral', value: 'Start tracking' }}
          linkTo="/tracker"
        />
        <StatCard
          title="Active Methods"
          value="0"
          description="Ways you're earning"
          icon={<FaMoneyBillWave className="text-secondary" size={24} />}
          change={{ type: 'neutral', value: 'Explore methods' }}
          linkTo="/earning-methods"
        />
        <StatCard
          title="Learning Progress"
          value="0%"
          description="Resources completed"
          icon={<FaBook className="text-success" size={24} />}
          change={{ type: 'neutral', value: 'Start learning' }}
          linkTo="/resources"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <EarningMethodsPreview />
        <RecentEarnings />
      </div>

      <div className="card mt-8 bg-primary bg-opacity-5 border-primary border-opacity-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Ready to start earning online?</h3>
            <p className="text-gray-600 mt-1">Explore our curated list of legitimate online earning methods to find what works for you.</p>
          </div>
          <Link to="/earning-methods" className="btn-primary mt-4 md:mt-0 text-center">
            Explore Methods
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;