import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div className='error-page'>
   <h1>Opps</h1>
   <p>Something went wrong</p>
   <h2>{err.status} : {err.statusText}</h2>
    </div>
  )
}

export default Error
