import React from 'react';

import { IProduct } from '../../../../dtos/IProduct';
import { formatPrice } from '../../../../utils/formatPrice';
import { StarIcon } from '../../../../styles/assets/customIcons';

import { Button } from '../../../../components/Button';

import { Container, Product, Stars, ContainerPrice } from './styles';
import { useShoppingCart } from '../../../../hooks/shoppingCart';

interface IListProductsProps {
  products: IProduct[];
}

const ListProducts: React.FC<IListProductsProps> = ({ products }) => {
  const { addProduct } = useShoppingCart();

  return (
    <Container>
      {products.length !== 0 &&
        products
          .slice(0, 4)
          .map(
            ({
              productId,
              imageUrl,
              productName,
              stars,
              price,
              installments,
              listPrice,
            }) => (
              <Product key={productId} isOff={!!listPrice}>
                {!!listPrice && <span className="off">OFF</span>}
                <img src={imageUrl} alt="Product " />
                <div className="content-product">
                  <h3>{productName}</h3>
                  <Stars>
                    {[0, 1, 2, 3, 4].map(index => (
                      <StarIcon key={index} isFilled={stars <= index} />
                    ))}
                  </Stars>
                  <ContainerPrice>
                    <span className="price">por {formatPrice(price)}</span>
                    <span className="installment">
                      {installments.length > 0 &&
                        installments.map(
                          ({ quantity, value }) =>
                            ` ou em ${quantity}x de ${formatPrice(value)}`
                        )}
                    </span>
                  </ContainerPrice>
                  {!listPrice && (
                    <Button
                      onClick={() =>
                        addProduct({
                          productId,
                          imageUrl,
                          productName,
                          stars,
                          price,
                          installments,
                          listPrice,
                        })
                      }
                    >
                      Comprar
                    </Button>
                  )}
                </div>
              </Product>
            )
          )}
    </Container>
  );
};

export { ListProducts };
