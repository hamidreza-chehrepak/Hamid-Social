function Post({ text }) {
  return (
    <article className="post">
      <h3>Hamid-Social Post</h3>

      <p>
        {text}
      </p>

      <button>
        Like
      </button>

      <button>
        Comment
      </button>
    </article>
  )
}

export default Post