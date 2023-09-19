import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HeroContextProvider } from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HeroContextProvider>
      <App />
    </HeroContextProvider>
  </React.StrictMode>
);
