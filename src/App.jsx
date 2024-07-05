import { useState } from 'react'
import './App.css'

function App() {
  const[Count, setCount]=useState(0)

  const Incriment= () =>{
     return setCount(Count + 1)  ;
     

  }
  
  const Decriment = () =>{
    setCount(Count - 1)
    
  }
  const reset = ()=>{
    if(count ===10 || count === -10){
      return setCount(0)
    }
  }
  reset();

  return (
    <>
     <div>
      <h1> Count is {Count}</h1>
      
      </div>
      <div>
        <button type='text' onClick={Incriment} >Add Value</button> <br />
        <button type='text' onClick={Decriment} >Remove Value</button>
      </div>


                
    </>
  )
}

export default App
