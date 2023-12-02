import React from 'react'

export default function Loader() {
  return (
    <div className='h-[200px] w-[200px] grid place-items-center'>
        <span className='h-6 w-6 border-gray-700 animate-spin duration-1000 rounded-full border-[3px] border-l-transparent'></span>
    </div>
  )
}
