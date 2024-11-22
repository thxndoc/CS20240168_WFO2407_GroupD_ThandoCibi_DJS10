import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
        if (!response.ok) {
            console.error(`Error: ${response.status} Not Found`)
            setError('Data fetching failed')
            return [];
        }
        return response.json()
        })
        .then(data => setPosts(data))
        .catch(error => {
            console.error('Error:', error)
        })
    }, [])

    // console.log(posts)
    if (error) {
    return (
        <>
            <h1>
                {error}
            </h1>
        </>
    )
    }
    
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