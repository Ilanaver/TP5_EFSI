import React from 'react';
import './Completa.css'

function Completa({ setTodos, todos, index }) {
  const toggleComplete = () => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    newTodos[index].completedAt = newTodos[index].completed ? Date.now() : null;
    setTodos(newTodos);
  };

  return (
    <button onClick={toggleComplete}>
      {todos[index].completed ? 'Desmarcar' : 'Completar'}
    </button>
  );
}

export default Completa;
