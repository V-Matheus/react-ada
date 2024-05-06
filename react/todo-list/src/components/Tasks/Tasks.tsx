import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { json } from 'stream/consumers';

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

    const newTasks = [
      ...tasks,
      { id: new Date().getTime(), title: taskTitle, done: false },
    ];

    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTaskTitle('');
  }

  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem('tasks');
    if (tasksOnLocalStorage) {
      setTasks(JSON.parse(tasksOnLocalStorage));
    }
  }, []);

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
