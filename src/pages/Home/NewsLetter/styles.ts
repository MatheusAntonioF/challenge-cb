import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 146px;

  margin-top: 60px;
  padding: 36px 0;

  ${({ theme: { pallete } }) => css`
    background: ${pallete.grey.custom};
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme: { pallete } }) => css`
    > h4 {
      font-weight: bold;
      font-size: 22px;
      line-height: 22px;

      color: ${pallete.black.main};
    }

    > form {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 48px;

      margin-top: 16px;

      > input + input {
        margin: 0 8px;
      }
    }
  `}
`;
