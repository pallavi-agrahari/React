import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]=useState(15)
 //let counter=15;

 const addValue=()=>{
  //console.log("value added", Math.random());
  console.log("value added", counter);
  counter=counter+1;

 }
  return (
    <>
      <h1>PAllavi Agrahari</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button>
        remove value
      </button>
    </>
  )
}

export default App
