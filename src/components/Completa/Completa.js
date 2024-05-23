import React from 'react';

function Completa({ setTodos, todos, index }) {
  const toggleComplete = () => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    newTodos[index].completedAt = newTodos[index].completed ? Date.now() : null;
    setTodos(newTodos);
  };

  return (
    <button onClick={toggleComplete}>
      {todos[index].completed ? 'Marcar como Incompleta' : 'Marcar como Completada'}
    </button>
  );
}

export default Completa;
