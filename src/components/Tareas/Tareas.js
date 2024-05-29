import React from 'react';
import Completa from '../Completa/Completa.js';
import Eliminar from '../Eliminar/Eliminar.js';
import './Tareas.css';

function Tareas({ todos, setTodos }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div className='todo-item' key={index}>
          <span className={todo.completed ? 'completed' : 'null'}>
            {todo.text} (creado el {new Date(todo.createdAt).toLocaleString()})
            {todo.completed && (
              <span> - completado el {new Date(todo.completedAt).toLocaleString()}</span>
            )}
          </span>
          <div className='botones'>
            <Completa setTodos={setTodos} todos={todos} index={index} />
            <Eliminar setTodos={setTodos} todos={todos} index={index}/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tareas;
