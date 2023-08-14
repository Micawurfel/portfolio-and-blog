import React from 'react'
import { Link } from 'react-router-dom'
import BtnContact from '../BtnContact'

export default function Post({title, summary, file, _id}) {
  
  return (
    <div className='article bg-primary' style={{width: '400px', height:'400px'}}>
      <Link to={`/post/${_id}`}>
        <img src={`http://localhost:3001/`+file} alt="" style={{width: '380px', height:'200px'}}/>
      </Link>
      <div>
        <Link to={`/post/${_id}`}>
          <h1>{title} </h1>
        </Link>
        <p>{summary}</p>
        <BtnContact link={`/post/${_id}`} title='Leer Mas'/>
      </div>
    </div>
  )
}
