import React from 'react'
import ResCard from './ResCard'

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>
        Search
      </div>

      <div className='res-container'> 
           <ResCard/>
           <ResCard/>
              <ResCard/>
           <ResCard/>
              <ResCard/>
           <ResCard/>
      </div>


    </div>
  )
}

export default Body
