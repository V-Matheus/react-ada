import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header/Header';
import ProductsList from './components/ProductsList/ProductsList';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}> 
      <GlobalStyles />
      <Header />

      <ProductsList />
    </Provider>
  );
}
export default App;
