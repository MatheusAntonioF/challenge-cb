import React from 'react';

import { Navbar } from '../../components/Navbar';
import { Banner } from './Banner';
import { Products } from './Products';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Products />
    </>
  );
};

export { Home };
