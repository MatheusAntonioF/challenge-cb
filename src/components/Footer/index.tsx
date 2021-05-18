import React from 'react';

import { Button } from '../Button';

import { Wrapper, Container, LeftSide, MiddleSide, RightSide } from './styles';

import mailIcon from '../../styles/assets/mail.svg';
import sacIcon from '../../styles/assets/sac.svg';
import logoWhiteIcon from '../../styles/assets/logo-white.svg';
import poweredByIcon from '../../styles/assets/poweredBy.svg';

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <h4>Localização</h4>
        <div className="content">
          <LeftSide>
            <span className="address">
              Avenida Andrômeda, 2000. Bloco 6 e 8 Alphavile SP
            </span>
            <span className="mail">brasil@corebiz.ag</span>
            <span className="contact">+55 11 3090 1039</span>
          </LeftSide>
          <MiddleSide className="middle-side">
            <Button width="195px" height="38px">
              <img src={mailIcon} alt="Mail" />
              <span>ENTRE EM CONTATO</span>
            </Button>
            <Button width="195px" height="38px">
              <img src={sacIcon} alt="Sac" />
              <span>FALE COM O NOSSO CONSULTOR ONLINE</span>
            </Button>
          </MiddleSide>
          <RightSide className="right-side">
            <div className="logo">
              <span>Created By</span>
              <img src={logoWhiteIcon} alt="Logo" />
            </div>
            <img src={poweredByIcon} alt="Powered By" />
          </RightSide>
        </div>
      </Container>
    </Wrapper>
  );
};

export { Footer };
