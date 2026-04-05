import React from 'react'

/**
 * res-card
 * - Image
 * - Name of restaurant
 * - Cusines
 * - Rating
 * - delivery time
 */

const ResCard = () => {
  return (
    <div className='res-card'>
      <img src="/KFC.jpg" alt='res-img'/>
      <div className='res-info'>
        <div>
            <h1>Restudent name</h1>
            <p className='rating'> Rating </p>   
        </div>

        <div>
           <h2>Price/INR</h2>
           <h4>38 mins</h4>
        </div>
      </div>
    </div>
  )
}

export default ResCard
