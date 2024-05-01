import React from "react";

class App extends React.Component {

  constructor() {
    super()
    this.nome = 'Victor Matheus'
  }

  render() {
    return (
      <div>
        <h1>
          Aprendendo reacct
        </h1>
        <h2>{this.nome}</h2>
      </div>
    );
  }
}

export default App;
