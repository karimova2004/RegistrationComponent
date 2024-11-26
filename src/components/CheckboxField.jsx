import React from 'react';

const CheckboxField = ({ name, checked, onChange, label }) => {
  return (
    <label className="checkbox-field">
      <input type="checkbox" name={name} checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};

export default CheckboxField;
