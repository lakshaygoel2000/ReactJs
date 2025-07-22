import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("whitesmoke");

  return (
    <>
      <div className='main-container' style={{ backgroundColor: color, height: "100vh" }}>
        <div className='color-bar p-20'>
          <button classname="red colors" onClick={()=> setColor("Red")}>Red</button>
          <button classname="blue colors" onClick={()=> setColor("Blue")}>Blue</button>
          <button classname="green colors" onClick={()=> setColor("Green")}>Green</button>
          <button classname="black colors" onClick={()=> setColor("Black")}>Black</button>
        </div>
      </div>
    </>
  );
}

export default App
