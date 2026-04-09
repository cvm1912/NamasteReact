import React, { useEffect, useState } from 'react'
import ResCard from './ResCard'
import Simmer from './Simmer'
import useOnline from '../utils/useOnline'


const Body = () => {
  const [restaurantList, setRestaurantList] = useState([])
  const [filterrestaurantList, setFilterRestaurant] = useState([])
  const [searchText,setSearchText] = useState("");

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING3"
      )

      const json = await data.json()
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
        })) || []

      setRestaurantList(restaurants)
      setFilterRestaurant(restaurants)
    } catch (error) {
      console.error("Failed to fetch:", error)
    }
  }

  const onlineStatus = useOnline();
  if(onlineStatus===false){
    return <h1>looks like you are offline, check your internet connection</h1>
  }


  /**
   * while data is not getting loaded showing a spinner 
   */

  /**
   * latest standard practise
   */

  

  return  restaurantList.length===0 ?<Simmer/>:(
    <div className='body'>
      <div className='search'>
        <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type='text' className='search-box' placeholder='Search for restaurants and food' />
        <button className='search-btn' onClick={() => {
          const filterrestaurent = restaurantList.filter((res) =>
            res.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilterRestaurant(filterrestaurent);
        }}>Search</button>
      </div>

      <div className='res-container'>
        
    
        {filterrestaurantList.map((restaurant) => (
          <ResCard key={restaurant.restaruantId} data={restaurant} />
        ))} 
      </div>
    </div>
  )
}

export default Body
