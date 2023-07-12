import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: `Task ${tasks.length + 1}`,
      deadline: '2023-12-31',
      assignedTo: 'John Doe',
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Tasks</h2>
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>{task.title}</Link>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
            />
            <span>{task.completed ? 'Completed' : 'Incomplete'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
