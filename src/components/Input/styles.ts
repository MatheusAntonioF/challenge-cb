import styled, { css } from 'styled-components';

import { IInputProps } from '.';

export const StyledInput = styled.input<IInputProps>`
  padding: 17px 16px;

  border-radius: 5px;

  outline: 0;
  border: 0;

  ${({ width, height, theme: { pallete } }) => css`
    width: ${width};
    height: ${height};

    background: ${pallete.white.main};

    &::placeholder {
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      color: ${pallete.black.light};
    }
  `};
`;
