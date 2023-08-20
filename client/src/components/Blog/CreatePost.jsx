import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Editor from './Editor';

export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [imagen, setImagen] = useState('')
  const [content, setContent] = useState('')

  const navigate = useNavigate()

  async function createNewPost(e){
    e.preventDefault()
    const data = new FormData
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('imagen', imagen);

    try {
      const URL = 'http://localhost:3001/post'
      const config = {
        method: 'POST',
        body: data, 
      }

      let response = await fetch(URL, config)
      
      if (response.ok) navigate('/blog')

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={createNewPost} encType="multipart/form-data">
      <input type="title" 
              placeholder='Title'
              onChange={e=> setTitle(e.target.value)}
      />
      <input type="summary" 
              placeholder='Summary'
              onChange={e=> setSummary(e.target.value)} 
      />
      <input type="file"
              name='imagen'
              onChange={e=> setImagen(e.target.files[0])}
      />
      <Editor
            value={content}
            onChange={setContent}
      />
      <button>Crear Post</button>
    </form>
  )
}