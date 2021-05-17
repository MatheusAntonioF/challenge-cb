import React, { useRef, useEffect } from 'react';

import { useField } from '@unform/core';

import { ContainerInput, StyledInput, MessageError } from './styles';

export interface IInputProps {
  width?: string;
  height?: string;
  placeholder: string;
  name: string;
}

const Input: React.FC<IInputProps> = ({
  width = '280px',
  height = '48px',
  placeholder,
  name,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <ContainerInput width={width} height={height}>
      <StyledInput
        ref={inputRef}
        isErrored={!!error}
        defaultValue={defaultValue}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
      {!!error && <MessageError>{error}</MessageError>}
    </ContainerInput>
  );
};

export { Input };
