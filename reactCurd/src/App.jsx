import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Hello mr bean</h1>
      <h1> Counter value :5</h1>

      <button>Add value</button>
      <br /> <br />
      <button>Remove value</button>
    </>
  )
}

export default App
