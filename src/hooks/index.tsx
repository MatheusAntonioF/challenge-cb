import React from 'react';
import { ShoppingCarProvider } from './shoppingCart';

const ModuleProviders: React.FC = ({ children }) => {
  return <ShoppingCarProvider>{children}</ShoppingCarProvider>;
};

export { ModuleProviders };
