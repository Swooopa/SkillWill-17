import React, { useState } from 'react';

const TodoForm = () => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (taskName.trim() === '') {
      return;
    }

    try {
    // ...

    const response = await fetch('https://crudapi.co.uk/api/your-api-key/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: taskName, isCompleted: false }),
    });

    if (response.ok) {
      setTaskName('');
    } else {
      console.error('Error adding task');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={taskName} onChange={handleInputChange} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
