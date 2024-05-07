import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';
import { TaskProvider } from './context/TaskContex';
import './styles/global.css';

function App() {
  return (
    <TaskProvider >
      <Header />
      <Tasks />
    </TaskProvider>
  );
}

export default App;
