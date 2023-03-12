import React from 'react'

export default function BlackBox({ children, className, color }) {
  return (
    <div className={`border border-black mt-2 flex ${className}`} style={{ backgroundColor: `${color}` }}>
      {children}
    </div>
  )
}
