import styles from './styles.module.scss';
import StatsCard from '../StatsCard/StatsCard';
import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContex';

const Header: React.FC = () => {
  const { tasks } = useContext(TaskContext);

  const totalTasks = tasks.length;
  const totalPending = tasks.reduce((total, task) => {
    if (!task.done) return total + 1;
    return total;
  }, 0);

  const totalDone = totalTasks - totalPending;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My Todo</h1>

          <span>Bem-vindo, Matheus</span>
        </div>

        <div>
          <StatsCard title="Total de tarefas" value={totalTasks} />
          <StatsCard title="Tarefas pendentes" value={totalPending} />
          <StatsCard title="Tarefas concluidas" value={totalDone} />
        </div>
      </div>
    </header>
  );
};

export default Header;
