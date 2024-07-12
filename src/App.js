import React, { useState, useEffect } from 'react';
import Step1 from './components/Step1'
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Navigation from './components/Navigation';
import './App.css';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const validateStep = () => {
    const stepErrors = {};
    // Add validation logic based on currentStep
    if (currentStep === 1) {
      if (!formData.name) stepErrors.name = 'Name is required';
      if (!formData.email) stepErrors.email = 'Email is required';
      if (!formData.phone) stepErrors.phone = 'Phone is required';
    } else if (currentStep === 2) {
      if (!formData.address1) stepErrors.address1 = 'Address Line 1 is required';
      if (!formData.city) stepErrors.city = 'City is required';
      if (!formData.state) stepErrors.state = 'State is required';
      if (!formData.zip) stepErrors.zip = 'Zip Code is required';
    }
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      console.log('Form Submitted:', formData);
      setSubmitted(true);
      // Perform submit actions
    }
  };

  return (
    <div className="App">
      {submitted && (
        <div className="confirmation">
          <h2>Form Submitted Successfully!</h2>
          <p>Thank you for your submission. We have received your data.</p>
        </div>
      )}
      {!submitted && (
        <>
          {currentStep === 1 && (
            <Step1 formData={formData} setFormData={setFormData} errors={errors} />
          )}
          {currentStep === 2 && (
            <Step2 formData={formData} setFormData={setFormData} errors={errors} />
          )}
          {currentStep === 3 && <Step3 formData={formData} />}
          <Navigation
            currentStep={currentStep}
            handleNext={handleNext}
            handleBack={handleBack}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </div>
  );
};

export default App;
