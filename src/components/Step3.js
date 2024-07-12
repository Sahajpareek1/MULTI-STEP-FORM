import React from 'react';

const Step3 = ({ formData }) => {
  return (
    <div>
      <h2>Step 3: Confirmation</h2>
      <ul>
        <li>Name: {formData.name}</li>
        <li>Email: {formData.email}</li>
        <li>Phone: {formData.phone}</li>
        <li>Address Line 1: {formData.address1}</li>
        <li>Address Line 2: {formData.address2}</li>
        <li>City: {formData.city}</li>
        <li>State: {formData.state}</li>
        <li>Zip Code: {formData.zip}</li>
      </ul>
    </div>
  );
};

export default Step3;
