import React from 'react'
import './App.css'
import { useState } from 'react'
import animation from "js-confetti"


function App() {

  const[task, setTask] = useState([])
  const[completed, setCompleted] = useState([])
  const[text, setText] = useState()
  const[cb, setCb] = useState(false)
 

  const deleteTask = (place) =>{
      task.splice(place,1)
      setTask([...task])
  }

   const completeTheTask = (place) =>{
     
     const ani = new animation()
     ani.addConfetti({
      emojis: ['🌸', '💞', '💫', '💞'],
     })

    

     setTimeout(()=>{
       let t= task.splice(place,1)
        setCompleted([...completed,t])
        setCb(false)
        setTask([...task])
      },500)
  }

  const undoTask = (place) =>{
     setTimeout(()=>{
      let t= completed.splice(place,1)
      setTask([...task,t])
      setCb(false)
      setCompleted([...completed])
     })
  }

  return (
    <>
        <div className='container'>
          <div>
              <h1 id='heading'>To Do App..</h1>
          </div>
            

            <div className='child1'>
              <input 
              type='text' 
              id='inp-box'
              value={text}
              onChange={(event)=>{setText(event.target.value)}}
              />

              <button id='btn' onClick={()=>{
                let t=text.trim()
                if(t==''){
                  alert("can't")
                }else{

                  setTask([...task,text])
                }
                setText('')
                }}>Add Task</button>
            </div>

            <div className='child2'>
              <div className='ongoing'>
                  <h1>Ongoing Task</h1>

                  <div className='tasks'>

                   {task.map((item,index)=><div className='rendered-tasks'>
                    
                    <input type='checkbox'
                  
                    checked={cb}
                    onChange={()=>{completeTheTask(index)}}/>


                    <li key={index}>{item}</li> 
                    <img src='./edit.png' 
                    onClick={()=>{
                      let updated_value= prompt("Previously: "+task[index])
                      task.splice(index,1,updated_value)
                      setTask([...task])  
                    }}/>

                    <img id={index} src="./delete.png" width='50' 
                    onClick={()=>{deleteTask(index)}}/>
                    </div>)}
                  </div>
              </div>

              <div className='completed'>
                  <h1>Completed Task</h1>
                  {completed.map((item,index)=>
                  <div className='undo'>
                    <button onClick={()=>{undoTask(index)}}>undo</button>
                    <li key={index}>{item}</li>
                  </div>
                  )}
                  
              </div>
            </div>
        </div>
    </>
  )
}

export default App;