import React, { useState } from 'react';

function AddTarea({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <div>
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
