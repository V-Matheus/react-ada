import React, { useContext, useState } from 'react';
import styles from './style.module.scss';
import { TaskContext } from '../../context/TaskContex';

const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');

  const { tasks, setTasks } = useContext(TaskContext);

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

  function handleToggleTasksStatus(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });

    setTasks(newTasks);
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
              <input
                type="checkbox"
                id={`task-${task.id}`}
                onChange={() => handleToggleTasksStatus(task.id)}
              />
              <label className={task.done ? styles.done : ''} htmlFor={`task-${task.id}`}>{task.title}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Tasks;
