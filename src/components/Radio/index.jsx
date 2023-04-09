import React from 'react';

const Radio = (props) => {
  const { value, checked, className, onChange } = props;
  return (
    <RadioWrapper
      type="radio"
      className={className}
      id={value}
      name="radio-button-group"
      value={value}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Radio;
