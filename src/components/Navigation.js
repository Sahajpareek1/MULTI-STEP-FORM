import React from 'react';

const Navigation = ({ currentStep, handleNext, handleBack, handleSubmit }) => {
  return (
    <div>
      {currentStep > 1 && <button onClick={handleBack}>Back</button>}
      {currentStep < 3 && <button onClick={handleNext}>Next</button>}
      {currentStep === 3 && <button onClick={handleSubmit}>Submit</button>}
    </div>
  );
};

export default Navigation;
