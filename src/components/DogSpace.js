import { Link } from 'react-router-dom'
import React from 'react'
import './DogSpace.css';

function DogSpace(props) {
  const { name, image, address, hours, id } = props
  return (
    <div className="DogSpace">
<Link to={`/details/${id}`}>
  <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
</Link>      
<Link to={`/details/${id}`}>
  <h1>{name}</h1>
</Link>
      <div>{address}</div>
      <div>{hours}</div>
    </div>
  )
}

export default DogSpace