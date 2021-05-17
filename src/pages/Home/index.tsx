import React from 'react';

import { Navbar } from '../../components/Navbar';
import { Banner } from './Banner';
import { Products } from './Products';
import { NewsLetter } from './NewsLetter';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Products />
      <NewsLetter />
    </>
  );
};

export { Home };
