import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(0);
  const [words, setWords] = useState('');

  const handleCounter = (e) => {
    setWords(e.target.value)
    const count = words.split(/\s+/).filter(Boolean).length;
    setCounter(count);
  }

  return (
    <>
      <h1>Welcome to Word Counter App</h1>
      <h3>Developed By Mirza Hassan</h3>
      <textarea onChange={handleCounter} className='InputText' type='text' value={words} placeholder='Start Typing Here to Calculate Words'/>
      <div>
        <h4>Counted Words : {counter}</h4>
      </div>
    </>
  )
}

export default App
