import React from 'react'
import ResCard from './ResCard'
import { dummyRestaurantList } from '../assets/assets'
import { useState } from 'react'

const Body = () => {
  const [dummyRestaurantList ] = useState([1])
  return (
    <div className='body'>
      <div className='search'>
        Search
      </div>

      <div className='res-container'>
        {dummyRestaurantList.map((restaurant) => (
          <ResCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Body
