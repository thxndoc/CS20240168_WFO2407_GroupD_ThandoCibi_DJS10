import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

 // console.log(posts)
  return (
    <>
     <ol>
        {posts.map((post) => (
          <li key={post.id}>{`${post.title}`}<br/>{`${post.body}`}</li>
        ))}
      </ol>
    </>
  )
}

export default App

// 'https://jsonplaceholder.typicode.com/posts'