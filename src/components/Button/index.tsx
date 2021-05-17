import React from 'react';

import { StyledButton } from './styles';

export interface IButtonProps {
  width?: string;
  height?: string;
}

const Button: React.FC<IButtonProps> = ({
  width = '125.28px',
  height = '32.42px',
  children,
}) => {
  return (
    <StyledButton width={width} height={height}>
      {children}
    </StyledButton>
  );
};

export { Button };
