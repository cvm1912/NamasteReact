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
  return (
    <div className='res-card'>
      <img src={data.image} alt={data.name} />
      <div className='res-info'>
        <div>
            <h1>{data.name}</h1>
            <p className='rating'>⭐ {data.rating}</p>
            <p>{data.cusines?.join(", ")}</p>
        </div>

        <div>
           <h2>₹{data.price}</h2>
           <h4>{data.deliveryTime}</h4>
        </div>
      </div>
    </div>
  )
}

export default ResCard
