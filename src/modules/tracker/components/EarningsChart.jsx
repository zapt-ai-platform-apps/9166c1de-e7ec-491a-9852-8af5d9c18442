import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EarningsChart = ({ earnings }) => {
  const [chartType, setChartType] = useState('line');
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (earnings.length === 0) {
      setChartData({
        labels: ['No data available'],
        datasets: [
          {
            label: 'Earnings',
            data: [0],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
          },
        ],
      });
      return;
    }

    // Group earnings by month
    const groupedByMonth = earnings.reduce((acc, earning) => {
      const date = new Date(earning.date);
      const monthYear = `${date.getMonth() + 1}/${date.getFullYear()}`;
      
      if (!acc[monthYear]) {
        acc[monthYear] = 0;
      }
      
      acc[monthYear] += parseFloat(earning.amount);
      return acc;
    }, {});

    // Sort months chronologically
    const sortedMonths = Object.keys(groupedByMonth).sort((a, b) => {
      const [aMonth, aYear] = a.split('/').map(Number);
      const [bMonth, bYear] = b.split('/').map(Number);
      
      if (aYear !== bYear) {
        return aYear - bYear;
      }
      
      return aMonth - bMonth;
    });

    // Format month names
    const formattedLabels = sortedMonths.map(monthYear => {
      const [month, year] = monthYear.split('/').map(Number);
      return new Date(year, month - 1, 1).toLocaleString('default', { month: 'short', year: '2-digit' });
    });

    setChartData({
      labels: formattedLabels,
      datasets: [
        {
          label: 'Earnings',
          data: sortedMonths.map(month => groupedByMonth[month]),
          borderColor: '#3b82f6',
          backgroundColor: chartType === 'line' 
            ? 'rgba(59, 130, 246, 0.2)'
            : 'rgba(59, 130, 246, 0.7)',
          tension: 0.3,
        },
      ],
    });
  }, [earnings, chartType]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return '$' + value;
          }
        }
      }
    },
    maintainAspectRatio: false,
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              chartType === 'line'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } border border-gray-300 cursor-pointer`}
            onClick={() => setChartType('line')}
          >
            Line
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              chartType === 'bar'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            } border border-gray-300 cursor-pointer`}
            onClick={() => setChartType('bar')}
          >
            Bar
          </button>
        </div>
      </div>

      <div className="h-64">
        {earnings.length === 0 ? (
          <div className="flex items-center justify-center h-full bg-gray-50 rounded-lg">
            <div className="text-center">
              <p className="text-gray-500 mb-2">No earnings data available</p>
              <p className="text-sm text-gray-400">Add your first earnings to see your chart</p>
            </div>
          </div>
        ) : (
          chartType === 'line' ? (
            <Line options={options} data={chartData} />
          ) : (
            <Bar options={options} data={chartData} />
          )
        )}
      </div>
    </div>
  );
};

export default EarningsChart;