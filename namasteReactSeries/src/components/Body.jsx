import React from 'react'
import ResCard from './ResCard'
import { dummyRestaurantList } from '../assets/assets'
import { useState } from 'react'

const Body = () => {
  const arr = useState(dummyRestaurantList)
  const [restaurantList, setRestaurantList] = arr
  
  return (
    <div className='body'>
      <div className='search'>
        Search
        <button onClick={() => setRestaurantList(dummyRestaurantList.filter(r => r.rating >= 4.3))}>Top Rated Restaurants</button>
      </div>

      <div className='res-container'>
        {restaurantList.map((restaurant) => (
          <ResCard key={restaurant.name} data={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Body
