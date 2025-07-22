import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { use, useState } from 'react'
import './App.css'
import Block1 from "./components/ExpressionValuation" 
import Block2 from "./components/login"
import DefectDetails from "./components/defectdetails"
function App() {

  return (
    <Router>
      <div className='Block-Container'>
        <Link to="/" className='Block-Style'>Home</Link>
        <Link to="/Block1" className='Block-Style'>Expression Valuation</Link>
        <Link to="/Block2"className='Block-Style'>Login</Link>
      </div>
      <Routes>
        <Route path="/" element={""} />
        <Route path="/Block1" element={<Block1/>}/>
        <Route path="/Block2" element={<Block2/>}/>
        <Route path="/details" element={<DefectDetails/>} />
      </Routes>
    </Router>
    
  )
}

export default App
