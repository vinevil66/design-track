import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <h1>Design Track</h1>
      <p>A React + Vite scaffold using semantic design tokens.</p>
      <button type="button" className="counter" onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
      <Card
        title="Title"
        body="Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
      />
    </main>
  )
}

export default App
