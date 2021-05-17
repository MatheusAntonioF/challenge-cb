import styled, { css, keyframes } from 'styled-components';

import { transparentize } from 'polished';

const showWrapper = keyframes`
  from {
    width: 0;
  } to {
    width: 40%;
  }
`;

export const Wrapper = styled.div`
  position: fixed;

  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;

  ${({ theme: { pallete } }) => css`
    background: ${transparentize(0.2, pallete.grey.main)};
  `}

  z-index: 4;
`;

export const Container = styled.div`
  position: absolute;

  top: 0%;
  right: 0%;
  bottom: 0%;

  width: 40%;

  background: white;

  animation-name: ${showWrapper};
  animation-duration: 300ms;
  animation-delay: 0s;
  animation-fill-mode: backwards;
  animation-timing-function: ease-out;

  padding: 20px 30px 20px 20px;

  div.header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 20px;

    h3 {
      font-weight: bold;
      font-size: 22px;
    }

    > button.close {
      display: flex;
      align-items: center;
      justify-content: center;

      outline: 0;
      border: 0;

      background: inherit;

      cursor: pointer;

      > img {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const ListProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  height: 85%;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
    border-radius: 10px;
  }

  > div + div {
    margin-top: 20px;
  }
`;

export const Product = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  height: 10rem;

  img {
    height: 100%;
  }

  div.content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    flex: 1;
    height: 100%;
    padding: 10px;

    > div.footer {
      display: flex;
      justify-content: flex-end;

      width: 100%;
    }
  }
`;
