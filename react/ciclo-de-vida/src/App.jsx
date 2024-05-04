import React from 'react';
import { Counter } from './components/Counter';

export class App extends React.Component {
  constructor() {
    super();
    this.state = { showCounter: false };
  }

  render() {
    return (
      <div>
        <h1>Ciclo de Vida React</h1>

        <button
          onClick={() => {
            this.setState({ showCounter: !this.state.showCounter });
          }}
        >
          {this.state.showCounter ? 'Remover Contador' : 'Mostrar Contador'}
        </button>

        {this.state.showCounter ? <Counter /> : null}
      </div>
    );
  }
}

export default App;
