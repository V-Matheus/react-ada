import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header/Header';
import ProdutCard from './components/ProductCard/ProdutCard';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />

      <ProdutCard />
    </>
  );
}
export default App;
