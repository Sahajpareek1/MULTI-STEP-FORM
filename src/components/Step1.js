import React from 'react';

const Step1 = ({ formData, setFormData, errors }) => {
  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          {errors.phone && <span>{errors.phone}</span>}
        </div>
      </form>
    </div>
  );
};

export default Step1;
