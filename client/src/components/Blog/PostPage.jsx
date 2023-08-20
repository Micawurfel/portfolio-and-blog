import React,{useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'

export default function PostPage() {
const [postInfo, setPostInfo] = useState(null)

const {id} = useParams()

    useEffect(() => {
        fetch(`http://localhost:3001/post/${id}`)
          .then(res => res.json())
          .then(postInfo => setPostInfo(postInfo))
      }, [id])

      if(!postInfo) return ''

  return (
    <div className='container bg-primary'>
      <Link to={`/edit/${postInfo._id}`}>
        <button>Edit Post</button>
      </Link>
      <img src={`http://localhost:3001/${postInfo.file}`} alt="" />
      <div>
        <h1>{postInfo.title} </h1>
        <h2>{postInfo.summary}</h2>
        <div dangerouslySetInnerHTML={{__html:postInfo.content}}/>
      </div>
        
    </div>
  )
}
