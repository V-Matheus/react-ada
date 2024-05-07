import styles from './styles.module.scss';
import StatsCard from '../StatsCard/StatsCard';
import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContex';

const Header: React.FC = () => {

  const {tasks} = useContext(TaskContext)
  
  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>My Todo</h1>

          <span>Bem-vindo, Matheus</span>
        </div>

        <div>
          <StatsCard title='Total de tarefas' value={5}/>
          <StatsCard title='Tarefas pendentes' value={4}/>
          <StatsCard title='Tarefas concluidas' value={1}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
