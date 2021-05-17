import React from 'react';

import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

import { Container, Content } from './styles';

const NewsLetter: React.FC = () => {
  return (
    <Container>
      <Content>
        <h4>Participe de nossas news com promoções e novidades!</h4>
        <form>
          <Input placeholder="Digite seu nome" />
          <Input placeholder="Digite seu email" />
          <Button height="100%">Eu Quero!</Button>
        </form>
      </Content>
    </Container>
  );
};

export { NewsLetter };
