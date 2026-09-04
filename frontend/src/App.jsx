import './App.css'

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <h1>Hamid-Social</h1>

        <nav>
          <a href="#">Home</a>
          <a href="#">Profile</a>
          <a href="#">Messages</a>
        </nav>
      </header>

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