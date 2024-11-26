import React from 'react';

const TextAreaField = ({ name, placeholder, value, onChange, required }) => {
  return (
    <textarea
      className="textarea-field"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      rows="4"
    ></textarea>
  );
};

export default TextAreaField;
