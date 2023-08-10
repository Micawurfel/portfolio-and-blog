import React, {useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const  modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
}

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
]

export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [file, setFile] = useState('')
  const [content, setContent] = useState('')

  
  async function createNewPost(e){
    e.preventDefault()
    const data = new FormData
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', file);
    
    await fetch('http://localhost3001/blog', {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(err => console.log(err.message));
      
  }

  return (
    <form onSubmit={createNewPost}>
      <input type="title" 
              // value={title} 
              placeholder='Title'
              onChange={e=> setTitle(e.target.value)}
      />
      <input type="summary" 
              // value={summary} 
              placeholder='Summary'
              onChange={e=> setSummary(e.target.value)} 
      />
      <input type="file"
              onChange={e=> setFile(e.target.files)} 
      />
      <ReactQuill modules={modules} 
                  formats={formats}
                  // onChange={e=> setContent(e.target.value)}
      />
      <button>Crear Post</button>
    </form>
  )
}
