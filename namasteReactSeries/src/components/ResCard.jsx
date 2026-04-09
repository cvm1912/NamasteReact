import React from 'react'
import { Link } from 'react-router-dom'

const ResCard = ({ data }) => {
  const { restaruantId, image, name, rating, price, deliveryTime, cusines } = data
  return (
    <Link to={`/resturant/${restaruantId}`}>
      <div className='res-card'>
        <img src={image} alt={name} />
        <div className='res-info'>
          <h1>{name}</h1>
          <p className='rating'>⭐ {rating}</p>
          <p>{cusines?.join(", ")}</p>
          <h2>{price}</h2>
          <h4>{deliveryTime}</h4>
        </div>
      </div>
    </Link>
  )
}

export default ResCard
