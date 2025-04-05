import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Dashboard from '@/modules/dashboard/Dashboard';
import EarningMethods from '@/modules/earningMethods/EarningMethods';
import Tracker from '@/modules/tracker/Tracker';
import Resources from '@/modules/resources/Resources';
import Settings from '@/modules/settings/Settings';
import ZaptBadge from '@/components/common/ZaptBadge';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/earning-methods" element={<EarningMethods />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
      <ZaptBadge />
    </div>
  );
}