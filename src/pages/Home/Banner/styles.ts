import styled, { css } from 'styled-components';

interface BackgroundImgProp {
  backgroundImg: string;
}

export const Container = styled.div<{ mobileBackground: string | boolean }>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  max-height: 350px;
  height: 100%;

  margin-top: 80px;

  ${({ mobileBackground }) =>
    mobileBackground &&
    css`
      background: url(${String(mobileBackground)});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    `}
`;

export const BlackBanner = styled.div<BackgroundImgProp>`
  position: absolute;
  left: 0;

  width: 50%;
  height: 100%;

  ${({ backgroundImg }) => css`
    background: url(${backgroundImg});
    background-position: right;
  `}
`;

export const BannerImg = styled.div<BackgroundImgProp>`
  width: 55%;
  height: 100%;

  ${({ backgroundImg }) => css`
    background: url(${backgroundImg});
    background-position: center;
  `}
`;

export const Content = styled.div`
  position: absolute;
  left: 15%;

  max-width: 357px;

  span,
  h2 {
    color: ${({ theme: { pallete } }) => pallete.white.main};
  }

  span {
    display: block;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 40px;
    font-weight: bold;
    line-height: 45px;
  }

  @media screen and (max-width: 576px) {
    position: absolute;
    left: 4%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    span {
      font-size: 25px;
    }

    h2 {
      font-size: 36px;
    }
  }
`;

export const SliderCount = styled.div`
  position: absolute;
  right: 50%;
  left: 50%;
  bottom: 2%;

  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 85px;
  height: 20px;

  ${({ theme: { pallete } }) => css`
    > div {
      width: 10px;
      height: 10px;

      border-radius: 50%;

      background: ${pallete.grey.dark};

      &:first-child {
        background: ${pallete.red.main};
      }
    }
  `}
`;
