import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="hero-section">
        <h2>Welcome to Hamid-Social</h2>

        <p>
          A social platform for sharing knowledge, skills and ideas.
        </p>

        <button>
          Create Post
        </button>
      </main>
    </div>
  )
}

export default App