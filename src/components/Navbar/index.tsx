import React from 'react';

import {
  Wrapper,
  Container,
  LogoIcon,
  FormSearch,
  InputSearch,
  Account,
  ButtonShoppingCart,
} from './styles';

import logoIcon from '../../styles/assets/logo.svg';
import searchIcon from '../../styles/assets/search.svg';
import accountIcon from '../../styles/assets/account.svg';
import shoppingCartIcon from '../../styles/assets/shoppingCart.svg';

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <LogoIcon src={logoIcon} alt="Core Biz Logo" />
        <FormSearch onSubmit={e => e.preventDefault()}>
          <InputSearch placeholder="O que está procurando?" />
          <img src={searchIcon} alt="Search Icon" />
        </FormSearch>
        <Account>
          <img src={accountIcon} alt="Account icon" />
          <span>Minha Conta</span>
        </Account>
        <ButtonShoppingCart>
          <img src={shoppingCartIcon} alt="Shopping Cart Icon" />
        </ButtonShoppingCart>
      </Container>
    </Wrapper>
  );
};

export { Navbar };
