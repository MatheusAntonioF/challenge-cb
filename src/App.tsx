import React from 'react';

import { Routes } from './routes';
import { SharedStyles } from './styles';

const App: React.FC = () => {
  return (
    <SharedStyles>
      <Routes />
    </SharedStyles>
  );
};

export default App;
