import React, { useEffect, useState } from 'react';

import {
  Container,
  BlackBanner,
  BannerImg,
  Content,
  SliderCount,
} from './styles';

import blackBannerImg from '../../../styles/assets/black-banner.png';
import bannerImg from '../../../styles/assets/banner-img.png';
import bannerMobileImg from '../../../styles/assets/banner-mobile.png';
import { isMobile } from '../../../utils/isMobileDevice';

const Banner: React.FC = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    if (isMobile()) {
      setIsMobileDevice(true);
    }
  }, []);
  return (
    <Container mobileBackground={isMobileDevice && bannerMobileImg}>
      {!isMobileDevice && (
        <>
          <BlackBanner backgroundImg={blackBannerImg} />
          <BannerImg backgroundImg={bannerImg} />
        </>
      )}

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
