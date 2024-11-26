import React from 'react';

const InputField = ({ type, name, placeholder, value, onChange, required }) => {
  return (
    <input
      className="input-field"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default InputField;
