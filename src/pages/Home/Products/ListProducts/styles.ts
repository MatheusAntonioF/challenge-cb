import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;

  > div + div {
    margin-left: 99px;
  }
`;

export const Product = styled.div<{ isOff: boolean }>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 216px;
  height: 353px;

  transition: all 250ms ease-in;

  > img {
    width: 100%;
    height: 200px;
  }

  ${({ isOff, theme: { pallete } }) => css`
    > div.content-product {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      padding: 7px 24px;

      flex: 1;

      transition: all 250ms ease-in;

      > h3 {
        display: block;

        width: 100%;

        font-weight: 600;
        font-size: 12px;
        line-height: 16px;

        text-align: center;

        color: ${pallete.grey.main};
      }
    }

    &:hover {
      transform: scale(1.01);

      > div.content-product {
        background: ${pallete.grey.light};
      }
    }

    ${isOff &&
    css`
      span.off {
        position: absolute;
        top: 4%;
        right: 3%;

        z-index: 1;

        font-weight: 900;
        font-size: 16px;
        line-height: 22px;
        color: ${pallete.white.main};
      }

      &::after {
        content: '';

        position: absolute;
        top: 0%;
        right: 0%;

        display: flex;
        align-items: center;
        justify-content: flex-end;

        font-weight: 900;
        font-size: 16px;
        line-height: 22px;

        border-top: 71.36px solid ${pallete.red.main};
        border-left: 72.04px solid transparent;
      }
    `}
  `}
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin-top: 5px;

  > svg {
    width: 14px;
    height: 16px;

    fill: blue;
  }
`;

export const ContainerPrice = styled.div`
  margin: 23px 0 8px;

  span.price,
  span.installment {
    display: block;
  }

  ${({ theme: { pallete } }) => css`
    span.price {
      font-weight: bold;
      font-size: 18px;
      line-height: 25px;

      color: ${pallete.black.main};
    }

    span.installment {
      font-size: 11px;
      line-height: 15px;

      text-align: center;

      color: ${pallete.grey.main};
    }
  `}
`;
