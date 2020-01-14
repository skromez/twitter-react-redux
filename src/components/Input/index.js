import React from 'react';
import InputBody from './style';

const Input = ({ placeholder, className, type, onChange }) => (
  <InputBody onChange={onChange} type={type} className={className} placeholder={placeholder} />
);

export default Input;
