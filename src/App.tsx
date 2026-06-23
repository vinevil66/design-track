import Card from './components/Card'
import Settings from './pages/Settings'
import './App.css'

function App() {
  return (
    <main className="app">
      <Card
        title="Title"
        body="Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
      />
      <Card
        title="Title"
        body="Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
        variant="disabled"
      />
      <hr className="app__divider" />
      <Settings />
    </main>
  )
}

export default App
