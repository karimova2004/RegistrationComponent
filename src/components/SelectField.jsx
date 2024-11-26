import React from 'react';

const SelectField = ({ name, value, onChange, options }) => {
  return (
    <select
      className="select-field"
      name={name}
      value={value}
      onChange={onChange}
      required
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
