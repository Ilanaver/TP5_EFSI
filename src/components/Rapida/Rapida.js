import React, { useState } from 'react';
import './Rapida.css';

function Rapida({ todos }) {
  const [fastestTodo, setFastestTodo] = useState(null);

  const getFastestTodo = () => {
    const completedTodos = todos.filter(todo => todo.completed && todo.completedAt);
    if (completedTodos.length === 0) return null;

    let fastestTodo = completedTodos[0];
    completedTodos.forEach(todo => {
      if ((todo.completedAt - todo.createdAt) < (fastestTodo.completedAt - fastestTodo.createdAt)) {
        fastestTodo = todo;
      }
    });

    return fastestTodo;
  };

  const getFastestTodoClick = () => {
    const fastest = getFastestTodo();
    setFastestTodo(fastest);
  };

  return (
    <div className='rapido'>
      <button onClick={getFastestTodoClick}>Rapido</button>
      {fastestTodo && (
        <div className='fastest-task'>
          <h2>Tarea completada más rápido:</h2>
          <p>{fastestTodo.text} (Tiempo: {((fastestTodo.completedAt - fastestTodo.createdAt) / 1000).toFixed(2)} segundos)</p>
        </div>
      )}
    </div>
  );
}

export default Rapida;
