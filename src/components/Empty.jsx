import React from 'react'
import emptycart from '/emptycart.png'

const Empty = () => {
  return (
    <div>
      <img className='mt-16 w-full lg:w-[300px]' src={emptycart} alt="emptycartimg" />
    </div>
  )
}

export default Empty