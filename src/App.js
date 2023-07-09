import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
