import React from 'react';

import { Navbar } from '../../components/Navbar';
import { Banner } from './Banner';
import { Products } from './Products';
import { NewsLetter } from './NewsLetter';
import { Footer } from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export { Home };
