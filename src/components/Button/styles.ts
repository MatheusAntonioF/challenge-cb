import styled, { css } from 'styled-components';

import { IButtonProps } from '.';

export const StyledButton = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 12px;
  line-height: 16px;

  border: 0;
  border-radius: 5px;
  outline: 0;

  transition: all 250ms ease-in;

  ${({ width, height, theme: { pallete } }) => css`
    width: ${width};
    height: ${height};

    background: ${pallete.black.main};
    color: ${pallete.white.main};
  `}

  &:hover {
    transform: scale(1.02);

    cursor: pointer;
  }
`;
