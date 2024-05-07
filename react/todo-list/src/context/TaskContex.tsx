import React, { createContext, useEffect, useState } from 'react';


interface TaskProviderProps {
  children: React.ReactNode;
}

export interface Task {
  title: string;
  done: boolean;
  id: number;
}

interface TasksContextData {
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export const TaskContext = createContext({} as TasksContextData);

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState([] as Task[]);

  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem('tasks');
    if (tasksOnLocalStorage) {
      setTasks(JSON.parse(tasksOnLocalStorage));
    }
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
