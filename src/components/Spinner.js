import React from 'react'
import './Spinner.css';

const Spinner = () => {
  return (
      <div className='w- 11/12 w-max[450px] flex flex-col justify-center items-center'>
          <span className='spinner'></span>
          <br/>
          <p className='text-md text-red-400'>Loading...</p>
      </div>
  )
}

export default Spinner