import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 213px;

  ${({ theme: { pallete } }) => css`
    background: ${pallete.black.main};
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  max-width: 1050px;
  height: 100%;

  padding: 25px 0;

  ${({ theme: { pallete } }) => css`
    h4 {
      color: ${pallete.white.main};

      position: relative;

      &::after {
        content: '';

        position: absolute;

        left: 0%;
        bottom: -40%;

        width: 44px;
        height: 3px;

        background: ${pallete.white.main};
      }
    }
  `}

  > div.content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ theme: { pallete } }) => css`
    span {
      color: ${pallete.white.main};
      font-size: 13px;
    }
  `}

  > span + span {
    margin-top: 10px;
  }

  span.address {
    max-width: 282px;
  }
`;

export const MiddleSide = styled.div`
  > button + button {
    margin-top: 25px;
  }

  ${({ theme: { pallete } }) => css`
    > button {
      display: flex;
      align-items: center;
      justify-content: center;

      background: ${pallete.white.main};

      > img {
        width: 18px;
        height: 18px;

        margin-right: 17px;
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;

        font-weight: 600;
        font-size: 12px;

        width: 127px;
        color: ${pallete.black.main};
      }
    }
  `}
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 30%;
  height: 50px;

  div.logo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > img {
      width: 71.44px;
      height: 20px;
    }

    ${({ theme: { pallete } }) => css`
      > span {
        font-weight: 400;
        font-size: 10.6017px;
        line-height: 14px;
        color: ${pallete.white.main};
      }
    `}
  }
`;
