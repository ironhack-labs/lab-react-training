import React from 'react'

export default function BoxColor({r,g,b}) {
  return (
    <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`, padding: 50 }}>
      rgb({r},{g}, {b})
    </div>
  )
}
