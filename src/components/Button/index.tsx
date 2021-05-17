import React from 'react';

import { StyledButton } from './styles';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
}

const Button: React.FC<IButtonProps> = ({
  width = '125.28px',
  height = '32.42px',
  children,
  ...rest
}) => {
  return (
    <StyledButton width={width} height={height} {...rest}>
      {children}
    </StyledButton>
  );
};

export { Button };
