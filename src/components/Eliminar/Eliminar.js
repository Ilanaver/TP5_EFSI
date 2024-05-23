import React from 'react';
import './Eliminar.css';
function Eliminar({ setTodos, todos, index }) {
  const deleteTodo = () => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos);
  };

  return (
    <button className="delete-btn" onClick={deleteTodo}>Eliminar</button>
  );
}

export default Eliminar;
