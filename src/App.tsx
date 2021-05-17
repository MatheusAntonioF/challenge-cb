import React from 'react';
import { ModuleProviders } from './hooks';

import { Routes } from './routes';
import { SharedStyles } from './styles';

const App: React.FC = () => {
  return (
    <ModuleProviders>
      <SharedStyles>
        <Routes />
      </SharedStyles>
    </ModuleProviders>
  );
};

export default App;
