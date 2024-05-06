import React from 'react';
import './styles/App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Article } from './components/Article/Article';
import { Counter } from './components/Counter/Counter';

class App extends React.Component {
  render() {
    return (
      <>
        {/* <Navbar /> */}

        <Counter />

        {/* <section id="articles">
          <Article
            title="Designing Dashbord"
            provider="NASA"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi expedita, possimus perferendis quis odit, earum distinctio assumenda explicabo temporibus error, molestiae iste? Obcaecati doloribus mollitia veniam! Dolorem labore illo aspernatur"
          />
          <Article
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi expedita, possimus perferendis quis odit, earum distinctio assumenda explicabo temporibus error, molestiae iste? Obcaecati doloribus mollitia veniam! Dolorem labore illo aspernatur"
          />
          <Article title="exemplo 3" />
          <Article title="exemplo 4" />
        </section> */}
      </>
    );
  }
}

export default App;
