import React, { useState } from 'react';
import './App.css';
import Titulo from './components/Titulo/Titulo.js';
import Subtitulo from './components/Subtitulo/Subtitulo.js';
import AddTarea from './components/addTarea/AddTarea.js';
import Tareas from './components/Tareas/Tareas.js';
import Rapida from './components/Rapida/Rapida.js';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Titulo texto="TODO List"></Titulo>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Subtitulo texto="Agregar Tarea"></Subtitulo>
            <AddTarea setTodos={setTodos} todos={todos}></AddTarea>
          </div>
          <div className='one-half column'>
            <Subtitulo texto="Tus Tareas"></Subtitulo>
            <Tareas setTodos={setTodos} todos={todos}></Tareas>
            <Rapida todos={todos}></Rapida>      
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
