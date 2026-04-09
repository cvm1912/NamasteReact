
import { useParams } from 'react-router-dom'
import Simmer from './Simmer'
import useRestAurant from '../utils/useRestAurant'

const RestaurantMenu = () => {
  const { id } = useParams()
  const menu = useRestAurant(id)

  if (!menu) return <Simmer/>

  return (
    <div className='menu'>
      <h1>{menu?.cards?.[0]?.card?.card?.info?.name}</h1>
      <h3>{menu?.cards?.[0]?.card?.card?.info?.cuisines?.join(', ')}</h3>
    </div>
  )
}

export default RestaurantMenu
