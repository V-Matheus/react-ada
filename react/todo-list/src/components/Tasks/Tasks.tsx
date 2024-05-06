import React, { useState } from 'react';
import styles from './style.module.scss';

interface Task {
  title: string;
  done: boolean;
  id: number;
}

const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState([] as Task[]);

  function handleSubmitAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskTitle.length < 3) {
      alert('Não é possivel adicionar uma tarefa com menos de 3 letras');
      return;
    }

    setTasks([...tasks, { id: new Date().getTime(), title: taskTitle, done: false }]);

    setTaskTitle('')
  }

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="">Adicionar Tarefa</label>
          <input
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            type="text"
            id="task-title"
            placeholder="Títlo da tarefa"
          />
        </div>

        <button>Adicionar</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" id={`task-${task.id}`} />
              <label htmlFor={`task-${task.id}`}>{task.title}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Tasks;
