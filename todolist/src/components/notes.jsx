import { useState, useRef } from 'react'
import './notes.css'

function Notes() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showInput, setShowInput] = useState(false);
  const noteNo = useRef(1)

  const CreateNewNote = ()=>{
    setShowInput(true)
    setNewNote('')
  }
  const handleAddNewNote = () => {
    if(newNote.trim() === '') return;
    setNotes([{id: noteNo.current, text: newNote }, ...notes,])
    noteNo.current++
    setNewNote('');
  }
  
  const handleDeleteNote = (id) =>{
    setNotes(notes.filter(i => i.id !== id));
  }

  return (
  <>
    <div className='Notes-container'>
      <h1>Notes App</h1>
      <button
      className="btn btn-primary" onClick={CreateNewNote}
      >Create Notes +</button>

      {showInput && (
        <div className='input-section notes-section'>
          <br></br>
          <input
            type='text'
            placeholder='Start your New Notes'
            value={newNote}
            onChange={(e)=> setNewNote(e.target.value)}
          >
          </input>
          <button onClick={handleAddNewNote}>Save</button>
      </div>
      )}

      <ul className="Notes-list">
        {
          notes.map(i => (
            <li key = {i.id} className='Notes-item'>
              <label>{i.id}</label>
              <div>
                <p>{i.text}</p>
              </div>
              <button onClick={() => handleDeleteNote(i.id)}>❌</button>
            </li>
          ))
        }
      </ul>
    </div>
  </>
  );
}

export default Notes
