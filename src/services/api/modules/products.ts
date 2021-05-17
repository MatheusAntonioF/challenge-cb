import React from 'react';

import { api } from '..';
import { IProduct } from '../../../dtos/IProduct';

interface IStateProp {
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

async function fetchListProducts({ setProducts }: IStateProp): Promise<void> {
  try {
    const { data } = await api.get<IProduct[]>('products');

    setProducts(data);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

export { fetchListProducts };
