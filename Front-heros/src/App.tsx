import React from 'react';
import './styles/style.scss';
import { Header } from './components/header/Header'
import { MainContainer } from './components/main/MainContainer';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainContainer />
    </BrowserRouter>
  );
};

export default App;
