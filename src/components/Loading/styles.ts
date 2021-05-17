import styled, { css, keyframes } from 'styled-components';

import { ILoadingProps } from '.';

const spin = keyframes`
  100%{
    transform: rotate(360deg);
  }
`;

const fancyAnimation = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {

    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {

    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

export const Container = styled.div<ILoadingProps>`
  ${({ width, height, theme: { pallete } }) => css`
    > svg {
      width: ${width};
      height: ${height};
      animation: ${spin} 2s linear infinite;

      > circle {
        fill: none;
        stroke: ${pallete.blue.main};
        stroke-width: 2px;
        stroke-linecap: round;
        animation: ${fancyAnimation} 1.75s ease-in-out infinite;
      }
    }
  `}
`;
