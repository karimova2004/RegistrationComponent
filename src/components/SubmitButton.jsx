import React from 'react';

const SubmitButton = ({ label }) => {
  return (
    <button className="submit-button" type="submit">
      {label}
    </button>
  );
};

export default SubmitButton;
