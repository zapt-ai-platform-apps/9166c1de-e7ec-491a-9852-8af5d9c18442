import React, { useState } from 'react';
import { earningMethodsData } from '@/modules/earningMethods/data/earningMethodsData';

const EarningsForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    amount: '',
    date: new Date().toISOString().split('T')[0],
    method: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.amount || isNaN(formData.amount) || parseFloat(formData.amount) <= 0) {
      newErrors.amount = 'Please enter a valid amount greater than 0';
    }
    
    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }
    
    if (!formData.method) {
      newErrors.method = 'Please select an earning method';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit({
        ...formData,
        amount: parseFloat(formData.amount),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="amount" className="label">Amount ($)</label>
          <input
            type="number"
            id="amount"
            name="amount"
            step="0.01"
            min="0"
            className={`input ${errors.amount ? 'border-danger focus:border-danger focus:ring-danger/50' : ''}`}
            value={formData.amount}
            onChange={handleChange}
            placeholder="0.00"
          />
          {errors.amount && <p className="text-danger text-sm mt-1">{errors.amount}</p>}
        </div>
        
        <div>
          <label htmlFor="date" className="label">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            className={`input ${errors.date ? 'border-danger focus:border-danger focus:ring-danger/50' : ''}`}
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <p className="text-danger text-sm mt-1">{errors.date}</p>}
        </div>
      </div>
      
      <div>
        <label htmlFor="method" className="label">Earning Method</label>
        <select
          id="method"
          name="method"
          className={`input ${errors.method ? 'border-danger focus:border-danger focus:ring-danger/50' : ''}`}
          value={formData.method}
          onChange={handleChange}
        >
          <option value="">Select a method</option>
          {earningMethodsData.map((method) => (
            <option key={method.id} value={method.name}>
              {method.name}
            </option>
          ))}
        </select>
        {errors.method && <p className="text-danger text-sm mt-1">{errors.method}</p>}
      </div>
      
      <div>
        <label htmlFor="description" className="label">Description (Optional)</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          className="input"
          value={formData.description}
          onChange={handleChange}
          placeholder="Add details about this earning..."
        ></textarea>
      </div>
      
      <div className="flex justify-end space-x-4 pt-4">
        <button
          type="button"
          className="btn-outline cursor-pointer"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn-primary cursor-pointer"
        >
          Save Earnings
        </button>
      </div>
    </form>
  );
};

export default EarningsForm;