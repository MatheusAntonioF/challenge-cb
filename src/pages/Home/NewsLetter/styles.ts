import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: auto;
  min-height: 146px;

  margin-top: 60px;
  padding: 36px 0;

  ${({ theme: { pallete } }) => css`
    background: ${pallete.grey.custom};
  `}

  @media screen and (max-width: 576px) {
    height: 280px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;

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

      > div + div {
        margin: 0 8px;
      }
    }

    > div.sent-newsletter {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      height: 100%;
    }
  `}

  @media screen and (max-width: 576px) {
    justify-content: space-evenly;

    > h4 {
      text-align: center;
    }
    > form {
      height: 100%;

      flex-direction: column;

      > div + div {
        margin: 8px 0;
      }
    }
  }
`;
