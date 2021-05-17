import React, { useEffect, useState } from 'react';

import { Container, Wrapper, Title } from './styles';

import { IProduct } from '../../../dtos/IProduct';
import { fetchListProducts } from '../../../services/api/modules/products';

import { ListProducts } from './ListProducts';

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      await fetchListProducts({ setProducts });
    }

    fetchProducts();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Title>Mais Vendidos</Title>
        <ListProducts products={products} />
      </Container>
    </Wrapper>
  );
};

export { Products };
