import React from 'react'

export default function Experiencie(props) {
  return (
    <div>
        <img src={props.logo} alt=""/>
        <div>
            <h1>{props.position}</h1>
            <p>{props.company}</p>
            <p>{props.dates}</p>
            <p>{props.description}</p>
        </div>
    </div>
  )
}
