import React from 'react';
import './styles.css'

export class Article extends React.Component {
  render() {
    return (
      <article>
        <img src="" alt="" />
        <div className="article-infos">
          <h2>Designing Dashbords</h2>
          <h3>NASA</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            officia laborum et molestiae? Quisquam provident temporibus
            reprehenderit, numquam quo hic enim? Minima veniam quidem mollitia
            nihil, laudantium libero eaque omnis.
          </p>
        </div>
      </article>
    );
  }
}
