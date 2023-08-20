import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Editor from './Editor';

export default function EditPost() {
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [imagen, setImagen] = useState('')

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      fetch(`http://localhost:3001/post/${id}`)
        .then(res => res.json())
        .then(postInfo => {
            setTitle(postInfo.title)
            setSummary(postInfo.summary)
            setContent(postInfo.content)
        })
    }, [id])
  
    async function editPost(e){
        e.preventDefault()
        const data = new FormData
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        // data.set('imagen', imagen);
        if (imagen?.[0]) {
            data.set('imagen', imagen?.[0]);
        }
  
      try {
        const URL = `http://localhost:3001/post/${id}`
        const config = {
          method: 'PUT',
          body: data, 
          credential: 'include'
        }
  
        let response = await fetch(URL, config)
        
        if (response.ok) navigate(`/post/${id}`)
  
      } catch (error) {
        console.log(error)
      }
    }
  
    return (
      <form onSubmit={editPost} encType="multipart/form-data">
        <input type="title" 
                placeholder='Title'
                value={title}
                onChange={e=> setTitle(e.target.value)}
        />
        <input type="summary" 
                placeholder='Summary'
                value={summary}
                onChange={e=> setSummary(e.target.value)} 
        />
        <input type="file"
                name='imagen'
                // value={imagen.name}
                onChange={e=> setImagen(e.target.files)}
        />
        <Editor
                value={content}
                onChange={setContent}
        />
        <button>Editar</button>
      </form>
  )
}
