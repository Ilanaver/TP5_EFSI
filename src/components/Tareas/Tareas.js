import React from 'react';
import Completa from '../Completa/Completa.js';
import Eliminar from '../Eliminar/Eliminar.js';
import './Tareas.css';

function Tareas({ todos, setTodos }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div className='todo-list' key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          <span>{todo.text} (Creado: {new Date(todo.createdAt).toLocaleString()})</span>
          {todo.completed && <span> (Completado: {new Date(todo.completedAt).toLocaleString()})</span>}
          <Completa setTodos={setTodos} todos={todos} index={index} />
          <Eliminar setTodos={setTodos} todos={todos} index={index}/>
        </div>
      ))}
    </div>
  );
}

export default Tareas;
