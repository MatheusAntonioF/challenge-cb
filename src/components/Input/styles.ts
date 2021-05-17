import styled, { css } from 'styled-components';

interface IContainerInputProps {
  width: string;
  height: string;
}

export const ContainerInput = styled.div<IContainerInputProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  ${({ width, height }) => css`
    width: ${width};
    height: ${height};
  `}
`;

export const StyledInput = styled.input<{ isErrored: boolean }>`
  padding: 17px 16px;

  border-radius: 5px;

  outline: 0;

  width: 100%;
  height: 100%;

  border: 1.2px solid transparent;

  transition: all 250ms ease-in;

  ${({ isErrored, theme: { pallete } }) => css`
    background: ${pallete.white.main};

    &::placeholder {
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      color: ${pallete.black.light};
    }

    ${isErrored &&
    css`
      border-color: ${pallete.red.main};
    `}
  `};
`;

export const MessageError = styled.span`
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;

  margin-top: 8px;

  color: ${({ theme: { pallete } }) => pallete.red.main};
`;
