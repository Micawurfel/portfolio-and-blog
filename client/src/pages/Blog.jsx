import React,{useEffect, useState} from 'react'
import Post from '../components/Blog/Post'

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/post')
      .then(res => res.json())
      .then(res => setPosts(res))
  }, [])

  return (
    <div className='d-flex'>
      {posts.map(post => <Post {...post} key={post._id}/>)}
    </div>
  )
}
