import React from 'react';
import styles from './style.module.scss';

const Tasks: React.FC = () => {
  return (
    <section className={styles.container}>
      <form>
        <div>
          <label htmlFor="">Adicionar Tarefa</label>
          <input type="text" id="task-title" placeholder="Títlo da tarefa" />
        </div>

        <button>Adicionar</button>
      </form>
    </section>
  );
};

export default Tasks;
