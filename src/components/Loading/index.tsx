import React from 'react';

import { Container } from './styles';

export interface ILoadingProps {
  width?: string;
  height?: string;
}

const Loading: React.FC<ILoadingProps> = ({
  width = '25vw',
  height = '25vh',
}) => {
  return (
    <Container width={width} height={height}>
      <svg viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" />
      </svg>
    </Container>
  );
};

export { Loading };
