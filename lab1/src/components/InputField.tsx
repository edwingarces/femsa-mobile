import React from 'react';

type ValueType = {
  number: number;
  text: string;
  radio: boolean;
};

type Type = keyof ValueType;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: Type;
}

const validateValue = (value: ValueType, type: Type) => {
  if (typeof value === type) {
    return value;
  }
  return null;
}

const InputField = ({ type, ...props }: InputProps) => {
  return (
    <input type={type} onChange={(value) => validateValue(value as unknown as ValueType, type)} {...props} />
  );
};

export default InputField;
