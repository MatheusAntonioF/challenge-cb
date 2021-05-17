import styled, { css } from 'styled-components';

interface BackgroundImgProp {
  backgroundImg: string;
}

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  max-height: 350px;
  height: 100%;
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
`;

export const SliderCount = styled.div`
  position: absolute;
  right: 47%;
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
