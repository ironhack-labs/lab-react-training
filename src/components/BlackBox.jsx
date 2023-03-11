import React from 'react'

export default function BlackBox({ children }) {
  return (
    <div className='border border-black mt-2 flex'>
      {children}
    </div>
  )
}
