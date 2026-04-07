import React, { useEffect, useState } from 'react'
import ResCard from './ResCard'
import { dummyRestaurantList } from '../assets/assets'

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(dummyRestaurantList)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090&page_type=DESKTOP_WEB_LISTING"
      )

      const json = await data.json()
      const first = json?.data?.cards
   

      first.find(c=>c.card.card.gridElements.infoWithStyle.restaurants)
         console.log(first);
      const restaurants = json?.data?.cards
        ?.find(c => c?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        ?.card?.card?.gridElements?.infoWithStyle?.restaurants
        ?.map(({ info }) => ({
          restaruantId: info.id,
          name: info.name,
          cusines: info.cuisines || [],
          rating: info.avgRating || 0,
          deliveryTime: info.sla?.slaString || "",
          price: info.costForTwo || "",
          image: `https://media-assets.swiggy.com/swiggy/image/upload/${info.cloudinaryImageId}`
        })) || dummyRestaurantList

      setRestaurantList(restaurants)
    } catch (error) {
      console.error("Failed to fetch:", error)
    }
  }

  return (
    <div className='body'>
      <div className='search'>
        Search
      </div>

      <div className='res-container'>
        {restaurantList.map((restaurant) => (
          <ResCard key={restaurant.restaruantId} data={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Body
