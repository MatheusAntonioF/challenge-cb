import React, { useEffect, useState } from 'react';

import { Container, Wrapper, Title } from './styles';

import { IProduct } from '../../../dtos/IProduct';
import { fetchListProducts } from '../../../services/api/modules/products';

import { ListProducts } from './ListProducts';
import { Loading } from '../../../components/Loading';

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      await fetchListProducts({ setProducts });

      setIsLoading(false);
    }

    fetchProducts();
  }, []);

  return (
    <Wrapper>
      {!isLoading ? (
        <Container>
          <Title>Mais Vendidos</Title>
          <ListProducts products={products} />
        </Container>
      ) : (
        <Loading />
      )}
    </Wrapper>
  );
};

export { Products };
