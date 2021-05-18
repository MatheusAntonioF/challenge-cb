import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 3;

  background: ${({ theme: { pallete } }) => pallete.white.main};

  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`;

export const Container = styled.div<{ isMobileDevice: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1100px;
  width: 100%;

  ${({ isMobileDevice }) =>
    isMobileDevice &&
    css`
      align-items: stretch;
      flex-direction: column;

      padding: 0 1.2rem;

      div.upper {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 92%;

        > button.burguer {
          display: grid;
          place-items: center;

          outline: 0;
          border: 0;

          width: 22px;
          height: 15px;

          > img {
            width: 100%;
            height: 100%;
          }
        }

        > img {
          height: 25px;
        }
      }

      div.bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-top: 5px;

        width: 100%;
      }
    `}
`;

export const LogoIcon = styled.img`
  width: 140px;
  height: 41px;
`;

export const FormSearch = styled.form`
  display: flex;
  align-items: center;

  max-width: 600px;
  width: 100%;
  height: 30px;

  ${({ theme: { pallete } }) => css`
    border-bottom: 1px solid ${pallete.grey.main};
  `}

  > img {
    width: 18px;
    height: 18px;
  }
`;

export const InputSearch = styled.input`
  width: 95%;
  height: 100%;
  border: none;
  outline: 0;

  padding: 5px 5px 8px 5px;

  ${({ theme: { pallete } }) => css`
    color: ${pallete.grey.main};

    &::placeholder {
      color: ${pallete.grey.main};
    }
  `}
`;

export const Account = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }

  > span {
    font-size: 13px;
    line-height: 18px;
  }
`;

export const ButtonShoppingCart = styled.div<{ isProductinCart: boolean }>`
  position: relative;

  &:hover {
    cursor: pointer;
  }

  ${({ isProductinCart, theme: { pallete } }) =>
    isProductinCart &&
    css`
      span.tooltip {
        position: absolute;
        top: 0%;
        right: -125%;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 18px;
        height: 18px;

        border-radius: 50%;

        background: ${pallete.red.main};

        color: ${pallete.white.main};
        font-weight: bold;
        font-size: 10px;
      }
    `}
`;
