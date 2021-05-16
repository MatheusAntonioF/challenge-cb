import React from 'react';

import { Navbar } from '../../components/Navbar';
import { Banner } from './Banner';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
    </>
  );
};

export { Home };
