import React, { useState } from 'react';
import './AddTarea.css';

function AddTarea({ setTodos, todos }) {
  const [inputValue, setInputValue] = useState('');
  const handleAddTodo = () => {
    if (inputValue !== '') {
      setTodos([
        ...todos, 
        {
          text: inputValue,
          completed: false,
          createdAt: Date.now(),
          completedAt: null,
        }]);  
    }
    setInputValue('');
  };

  return (
    <div className='add-tarea'>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button onClick={handleAddTodo}>Agregar</button>
    </div>
  );
}

export default AddTarea;

