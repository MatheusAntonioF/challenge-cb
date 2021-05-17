import React from 'react';

import { StyledInput } from './styles';

export interface IInputProps {
  width?: string;
  height?: string;
  placeholder: string;
}

const Input: React.FC<IInputProps> = ({
  width = '280px',
  height = '48px',
  placeholder,
}) => {
  return (
    <StyledInput placeholder={placeholder} width={width} height={height} />
  );
};

export { Input };
