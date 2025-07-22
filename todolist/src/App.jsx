import { useState, useRef } from 'react'
import './App.css'
import ToDoList from './components/list'
import Notes from './components/notes'

function App() {

  return (
  <>
  <div className="main-app-grid">
    <ToDoList />
    <Notes />
  </div>
    </>
  );
}

export default App
