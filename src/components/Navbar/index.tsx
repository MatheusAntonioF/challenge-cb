import React, { useEffect, useState } from 'react';

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
import burguerIcon from '../../styles/assets/burguer.svg';
import { isMobile } from '../../utils/isMobileDevice';

const Navbar: React.FC = () => {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    if (isMobile()) {
      setIsMobileDevice(true);
    }
  }, []);

  const { products } = useShoppingCart();

  return (
    <>
      <Wrapper>
        <Container isMobileDevice={isMobileDevice}>
          {!isMobileDevice ? (
            <>
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
            </>
          ) : (
            <>
              <div className="upper">
                <button type="button" className="burguer">
                  <img src={burguerIcon} alt="Burguer Icon" />
                </button>
                <LogoIcon src={logoIcon} alt="Core Biz Logo" />
                <ButtonShoppingCart
                  onClick={() => setShowShoppingCart(true)}
                  isProductinCart={products.length > 0}
                >
                  <img src={shoppingCartIcon} alt="Shopping Cart Icon" />
                  {products.length > 0 && (
                    <span className="tooltip">{products.length}</span>
                  )}
                </ButtonShoppingCart>
              </div>
              <div className="bottom">
                <FormSearch onSubmit={e => e.preventDefault()}>
                  <InputSearch placeholder="O que está procurando?" />
                  <img src={searchIcon} alt="Search Icon" />
                </FormSearch>
              </div>
            </>
          )}
        </Container>
      </Wrapper>
      {showShoppingCart && (
        <ShoppingCart onClose={() => setShowShoppingCart(false)} />
      )}
    </>
  );
};

export { Navbar };
