import React from 'react';

interface TodoProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
  onDelete: (id: number) => void;
  onToggleStatus: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ task, onDelete, onToggleStatus }) => {
  return (
    <li key={task.id} className={task.completed ? 'completed' : ''}>
      <input type="checkbox" checked={task.completed} onChange={() => onToggleStatus(task.id)} />
      <span>{task.title}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

export default Todo;
