import React from 'react'
import ResCard from './ResCard'
import { dummyRestaurantList } from '../assets/assets'

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>
        Search
      </div>

      <div className='res-container'>
        <ResCard data={dummyRestaurantList[0]} />
        <ResCard data={dummyRestaurantList[1]} />
        <ResCard data={dummyRestaurantList[2]} />
        <ResCard data={dummyRestaurantList[3]} />
        <ResCard data={dummyRestaurantList[4]} />
        <ResCard data={dummyRestaurantList[5]} />
        <ResCard data={dummyRestaurantList[6]} />
        <ResCard data={dummyRestaurantList[7]} />
        <ResCard data={dummyRestaurantList[8]} />
      </div>
    </div>
  )
}

export default Body
