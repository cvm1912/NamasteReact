import React from 'react'

/**
 * res-card
 * - Image
 * - Name of restaurant
 * - Cusines
 * - Rating
 * - delivery time
 */

const ResCard = ({ data }) => {
  const { image, name, rating, price, deliveryTime, cusines } = data
  return (
    <div className='res-card'>
      <img src={image} alt={name} />
      <div className='res-info'>
        <div>
            <h1>{name}</h1>
            <p className='rating'>⭐ {rating}</p>
            <p>{cusines?.join(", ")}</p>
        </div>

        <div>
           <h2>₹{price}</h2>
           <h4>{deliveryTime}</h4>
        </div>
      </div>
    </div>
  )
}

export default ResCard
