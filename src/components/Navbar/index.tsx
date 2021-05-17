import React, { useState } from 'react';

import {
  Wrapper,
  Container,
  LogoIcon,
  FormSearch,
  InputSearch,
  Account,
  ButtonShoppingCart,
} from './styles';

import ShoppingCart from '../ShoppingCart';

import { useShoppingCart } from '../../hooks/shoppingCart';

import logoIcon from '../../styles/assets/logo.svg';
import searchIcon from '../../styles/assets/search.svg';
import accountIcon from '../../styles/assets/account.svg';
import shoppingCartIcon from '../../styles/assets/shoppingCart.svg';

const Navbar: React.FC = () => {
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  const { products } = useShoppingCart();

  return (
    <>
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
          <ButtonShoppingCart
            onClick={() => setShowShoppingCart(true)}
            isProductinCart={products.length > 0}
          >
            <img src={shoppingCartIcon} alt="Shopping Cart Icon" />
            {products.length > 0 && (
              <span className="tooltip">{products.length}</span>
            )}
          </ButtonShoppingCart>
        </Container>
      </Wrapper>
      {showShoppingCart && (
        <ShoppingCart onClose={() => setShowShoppingCart(false)} />
      )}
    </>
  );
};

export { Navbar };
