import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <h1>Design Track</h1>
      <p>A React + Vite scaffold using semantic design tokens.</p>
      <button type="button" className="counter" onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
    </main>
  )
}

export default App
