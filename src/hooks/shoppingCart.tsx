import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { IProduct } from '../dtos/IProduct';

interface IProductShoppingCart {
  product: IProduct;
  quantity: number;
}

interface IShoppingCartContextData {
  products: IProductShoppingCart[];
  addProduct: (product: IProduct) => void;
  removeProduct: (productId: number) => void;
}

const ShoppingCartContext = createContext<IShoppingCartContextData>(
  {} as IShoppingCartContextData
);

const ShoppingCarProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProductShoppingCart[]>(() => {
    const persistedProducts = localStorage.getItem('@PRODUCTS');

    if (persistedProducts) return JSON.parse(persistedProducts);

    const defaultData = [] as unknown;

    return defaultData as IProductShoppingCart;
  });

  const addProduct = useCallback(
    (productData: IProduct) => {
      const foundProductIndex = products.findIndex(
        ({ product: { productId } }) => productId === productData.productId
      );

      let newProducts = [];

      if (foundProductIndex >= 0) {
        newProducts = products.map(({ product, quantity }, index) => {
          if (foundProductIndex === index) {
            return { product, quantity: quantity + 1 };
          }

          return { product, quantity };
        });
      } else {
        newProducts = [...products, { product: productData, quantity: 1 }];
      }

      localStorage.setItem('@PRODUCTS', JSON.stringify(newProducts));

      return setProducts(newProducts);
    },

    [products]
  );

  const removeProduct = useCallback(
    (productIdToRemove: number) => {
      const newProducts = products.filter(
        ({ product: { productId } }) => productId !== productIdToRemove
      );

      localStorage.setItem('@PRODUCTS', JSON.stringify(newProducts));

      return setProducts(newProducts);
    },
    [products]
  );

  const providerValues = useMemo(
    () => ({ products, addProduct, removeProduct }),
    [products, addProduct, removeProduct]
  );

  return (
    <ShoppingCartContext.Provider value={providerValues}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

const useShoppingCart = (): IShoppingCartContextData => {
  const shoppingCartContext = useContext(ShoppingCartContext);

  if (!shoppingCartContext)
    throw new Error('useShoppginCart must be used within and AuthProvider');

  return shoppingCartContext;
};

export { ShoppingCarProvider, useShoppingCart };
