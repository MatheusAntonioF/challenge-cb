import React from 'react';

import { useShoppingCart } from '../../hooks/shoppingCart';

import { Button } from '../Button';

import { Wrapper, Container, ListProducts, Product } from './styles';

import closeIcon from '../../styles/assets/close.svg';

interface IShoppingCartProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShoppingCart: React.FC<IShoppingCartProps> = ({ onClose }) => {
  const { products, removeProduct } = useShoppingCart();

  return (
    <Wrapper>
      <Container>
        <div className="header">
          <h3>Carrinho de compras</h3>
          <button
            type="button"
            className="close"
            onClick={() => onClose(false)}
          >
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
        <ListProducts>
          {products.map(
            ({ product: { productId, imageUrl, productName }, quantity }) => (
              <Product>
                <img src={imageUrl} alt="Product" />
                <div className="content">
                  <span className="name">{productName}</span>
                  <span className="quantity">
                    Quantidade: <strong> {quantity}</strong>
                  </span>
                  <div className="footer">
                    <Button onClick={() => removeProduct(productId)}>
                      Remover
                    </Button>
                  </div>
                </div>
              </Product>
            )
          )}
        </ListProducts>
        <Button width="100%" height="50px">
          Realizar Compra!
        </Button>
      </Container>
    </Wrapper>
  );
};

export default ShoppingCart;
