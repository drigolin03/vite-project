import { useState } from 'react';
import Todo from './Todo';

const List = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: false },
    { id: 3, title: 'Task 3', completed: true },
  ]);

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: `Task ${tasks.length + 1}`,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleTaskStatus = (id: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="list">
      <h2>Todo List</h2>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <Todo key={task.id} task={task} onDelete={deleteTask} onToggleStatus={toggleTaskStatus} />
        ))}
      </ul>
    </div>
  );
};

export default List;
