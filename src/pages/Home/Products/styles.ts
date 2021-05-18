import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin-top: 25px;

  padding: 0 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1100px;
  height: 445px;
`;

export const Title = styled.div`
  position: relative;

  display: block;

  width: 100%;

  font-weight: 900;
  font-size: 20px;
  line-height: 27px;

  text-align: left;

  ${({ theme: { pallete } }) => css`
    color: ${pallete.black.main};

    &::after {
      content: '';

      position: absolute;

      bottom: -20%;
      left: 0%;

      width: 65px;
      height: 5px;

      background: ${pallete.grey.dark};
    }
  `}
`;
