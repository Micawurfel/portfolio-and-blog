import React from 'react'
import { Link } from 'react-router-dom'

export default function BtnContact(props) {
  return (
    <Link to={props.link}>
        <button>{props.title}</button>
    </Link>
  )
}
