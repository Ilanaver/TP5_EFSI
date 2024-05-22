import React from 'react';

function Tareas({ todo, toggleComplete, deleteTodo }) {
  return (
    <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span>{todo.text} (Creado: {new Date(todo.createdAt).toLocaleString()})</span>
      {todo.completed && <span> (Completado: {new Date(todo.completedAt).toLocaleString()})</span>}
      <button onClick={toggleComplete}>Marcar como {todo.completed ? 'Incompleto' : 'Completado'}</button>
      <button onClick={deleteTodo}>Eliminar</button>
    </div>
  );
}

export default Tareas;
