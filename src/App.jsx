import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, [])

 // console.log(posts)
  return (
    <>
    <h1>Posts</h1>
     <ol>
        {posts.map((post) => (
          <li key={post.id}>
            {`${post.title}`}<br/>
            <span>{`${post.body}`}</span>
            </li>
        ))}
      </ol>
    </>
  )
}

export default App

// 'https://jsonplaceholder.typicode.com/posts'