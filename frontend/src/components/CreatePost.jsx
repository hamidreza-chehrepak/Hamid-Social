import { useState } from 'react'

function CreatePost({ addPost }) {
  const [text, setText] = useState('')

  function handleSubmit() {
    if (text.trim() === '') return

    addPost(text)

    setText('')
  }

  return (
    <div className="create-post">
      <textarea
        placeholder="Write your post..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Publish
      </button>
    </div>
  )
}

export default CreatePost