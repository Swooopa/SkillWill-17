import React from 'react';
import { useParams } from 'react-router-dom';

const Task = ({ tasks }) => {
  const { taskId } = useParams();
  const task = tasks.find((t) => t.id === parseInt(taskId));

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div>
      <h3>{task.title}</h3>
      <p>Deadline: {task.deadline}</p>
      <p>Assigned to: {task.assignedTo}</p>
      <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
    </div>
  );
};

export default Task;
