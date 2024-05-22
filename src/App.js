import React, { useState } from 'react';
import Tareas from './components/Tareas/Tareas';
import AddTarea from './components/addTarea/AddTarea';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      text,
      completed: false,
      createdAt: Date.now(),
      completedAt: null,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    newTodos[index].completedAt = newTodos[index].completed ? Date.now() : null;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

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

  const fastestTodo = getFastestTodo();

  return (
    <div>
      <h1>TODO List</h1>
      <AddTarea addTodo={addTodo} />
      <div>
        {todos.map((todo, index) => (
          <Tareas 
            key={index} 
            todo={todo} 
            toggleComplete={() => toggleComplete(index)} 
            deleteTodo={() => deleteTodo(index)} 
          />
        ))}
      </div>
      {fastestTodo && (
        <div>
          <h2>Tarea completada más rápido:</h2>
          <p>{fastestTodo.text} (Tiempo: {((fastestTodo.completedAt - fastestTodo.createdAt) / 1000).toFixed(2)} segundos)</p>
        </div>
      )}
    </div>
  );
}

export default App;
