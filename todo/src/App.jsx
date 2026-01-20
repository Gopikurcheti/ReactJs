import React from 'react'
import './App.css'

function App() {
  return (
    <>
      
      <div className='parent'>

        <div className='container'>
           <h1 id='heading'>To Do List</h1>
           <div>
            <input id='inp' type='text'/>
            <button id='btn'>+</button>
           </div>
        </div>

      </div>
    </>
  )
}

export default App