import React from 'react';
import './styles/App.css'
import Navbar from './components/navbar/Navbar';

class App extends React.Component {
  render() {
    return (
      <header>
        <Navbar/>
      </header>
    );
  }
}

export default App;
