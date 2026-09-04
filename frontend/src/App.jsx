import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Post from './components/Post'
import CreatePost from './components/CreatePost'

function App() {
  const [posts, setPosts] = useState([])

  function addPost(text) {
    const newPost = {
      id: Date.now(),
      text: text
    }

    setPosts([...posts, newPost])
  }

  return (
    <div className="app">
      <Navbar />

      <main className="hero-section">
        <h2>Welcome to Hamid-Social</h2>

        <p>
          A social platform for sharing knowledge, skills and ideas.
        </p>

        <CreatePost addPost={addPost} />

        {posts.map((post) => (
          <Post key={post.id} text={post.text} />
        ))}
      </main>
    </div>
  )
}

export default App