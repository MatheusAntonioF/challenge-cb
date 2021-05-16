import React from 'react';

import {
  Container,
  BlackBanner,
  BannerImg,
  Content,
  SliderCount,
} from './styles';

import blackBannerImg from '../../../styles/assets/black-banner.png';
import bannerImg from '../../../styles/assets/banner-img.png';

const Banner: React.FC = () => {
  return (
    <Container>
      <BlackBanner backgroundImg={blackBannerImg} />
      <BannerImg backgroundImg={bannerImg} />
      <Content>
        <span>Olá, o que você está buscando?</span>
        <h2>Criar ou migrar seu e-commerce?</h2>
      </Content>
      <SliderCount>
        <div />
        <div />
        <div />
        <div />
      </SliderCount>
    </Container>
  );
};

export { Banner };
